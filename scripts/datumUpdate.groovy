import java.util.concurrent.TimeUnit
import java.text.*
import de.uplanet.scripting.groovy.util.Safely
import java.text.SimpleDateFormat

def startTime = new Date().getTime()
Calendar cal = Calendar.getInstance()
def fmt = new SimpleDateFormat("yyyy-MM-dd")
def conn = g_dbConnections.systemConnection
cal.setFirstDayOfWeek(Calendar.MONDAY);
def createdDays = 0

def years = (g_sharedState.jahrVon..g_sharedState.jahrBis)

def arbeitzeiten = new Arbeitzeit(g_sharedState.stridPersonal, years, this)
def monthDaysCash = new MonthsDaysCash(g_sharedState.excitingMonths, this)
monthDaysCash.loadDays()


def stmt_datum = null
def stmt_zeit = null
def stmt_zeit_update = null


try {
    // ZE_T_M_DATUM
    stmt_datum = g_dbQuery.prepare(conn, """
					INSERT INTO
						DATAGROUP('C7ABD7C9D520E5CEA6C1929D211894AD7A8EBBF9')
						(FKSTRID,STRID,LUSERID,LUSERIDINSERT,DTEDIT,DTINSERT,REF_ZEITTYP,DT_DATUM,STR_WOCHENTAG,STR_ARBEITSZEITIST,L_ARBEITSZEITISTSEKUNDEN,STR_ARBEITSZEITSOLL,L_ARBEITSZEITSOLLSEKUNDEN,STR_ARBEITSZEITSALDO,L_ARBEITSZEITSALDOSEKUNDEN,L_KW,STR_PAUSE)
					VALUES
						(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)""")
    // ZE_T_M_D_ZEITEN
    stmt_zeit = g_dbQuery.prepare(conn, """
					INSERT INTO
						DATAGROUP('16ECD699C53029330A1D36F80FC43AF2A83035F1')
						(FKSTRID,STRID,LUSERID,LUSERIDINSERT,DTEDIT,DTINSERT,REF_BUCHUNGSART,B_STANDARDEINTRAG)
					VALUES
						(?,?,?,?,?,?,?,?)""")

    stmt_zeit_update = g_dbQuery.prepare(conn, "UPDATE DATAGROUP('C7ABD7C9D520E5CEA6C1929D211894AD7A8EBBF9') SET STR_ARBEITSZEITSOLL = ?, L_ARBEITSZEITSOLLSEKUNDEN = ? WHERE STRID = ?")

    g_sharedState.datumVon.upto(g_sharedState.datumBis) {

        def startTimeDate = new Date().getTime()
        d = it
        cal.setTime(d)
        m = 0
        def  newDayStrid = newGuid()
        def fkstrid = monthDaysCash.getMonthStrid(it)
        def foundDay = monthDaysCash.getDay(it)


        if (!foundDay) {

            createdDays++

            stmt_datum.setString(1, fkstrid)
            stmt_datum.setString(2, newDayStrid)
            stmt_datum.setInt(3, 1)
            stmt_datum.setInt(4, 1)
            stmt_datum.setTimestamp(5, now().withoutFractionalSeconds)
            stmt_datum.setTimestamp(6, now().withoutFractionalSeconds)
            stmt_datum.setString(7, arbeitzeiten.zeittyp(d.toTimestamp()))
            stmt_datum.setTimestamp(8, d.toTimestamp())
            stmt_datum.setString(9, wochentag(d))
            stmt_datum.setString(10, "00:00:00")
            stmt_datum.setInt(11, 0)
            stmt_datum.setString(12, arbeitzeiten.zeitsoll("Zeit", d))
            stmt_datum.setInt(13, arbeitzeiten.zeitsoll("Sekunden", d))
            stmt_datum.setString(14, "00:00:00")
            stmt_datum.setInt(15, 0)
            stmt_datum.setInt(16, cal.get(Calendar.WEEK_OF_YEAR))
            stmt_datum.setString(17, "00:00:00")

            stmt_datum.executeUpdate()

            stmt_zeit.setString(1, newDayStrid)
            stmt_zeit.setString(2, newGuid())
            stmt_zeit.setInt(3, 1)
            stmt_zeit.setInt(4, 1)
            stmt_zeit.setTimestamp(5, now().withoutFractionalSeconds)
            stmt_zeit.setTimestamp(6, now().withoutFractionalSeconds)
            stmt_zeit.setString(7, null)
            stmt_zeit.setBoolean(8, true)

            stmt_zeit.executeUpdate()
        } else {

            stmt_zeit_update.setString(1, arbeitzeiten.zeitsoll("Zeit", d))
            stmt_zeit_update.setInt(2, arbeitzeiten.zeitsoll("Sekunden", d))
            stmt_zeit_update.setString(3, foundDay.STRID)

            stmt_zeit_update.executeUpdate()
        }


        def endTimeDate = new Date().getTime()
        def sumTimeDate = (endTimeDate - startTimeDate) / 1000

    }

    stmt_datum = Safely.close(stmt_datum)
    stmt_zeit = Safely.close(stmt_zeit)
    stmt_zeit_update = Safely.close(stmt_zeit_update)

} finally {
    stmt_datum = Safely.close(stmt_datum)
    stmt_zeit = Safely.close(stmt_zeit)
    stmt_zeit_update = Safely.close(stmt_zeit_update)
}

def endTime = new Date().getTime()
def sumTime = (endTime - startTime) / 1000

g_log.info("""
DATUM ALL:
sumTime : $sumTime
createdDays: $createdDays
""")


//---------------------------------------------------------------------------------------------------------------------------------------------------UTIL

def wochentag(d) {
    def wt = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"]
    return wt[d.getDay()]
}

class Arbeitzeit {
    def glob
    def stridPersonal
    def monate
    def feiertage = null
    def arbeitszeiten = null
    def years

    def Arbeitzeit(stridPersonal, years, glob) {
        this.stridPersonal = stridPersonal;
        this.years = years
        this.glob = glob
    }

    def log(input) {
        this.glob.g_log.info(input)
    }

    def isFeiertag(d) {
        this.loadFeiertage()
        def ft = this.feiertage.find { element -> element == d }
        return ft ? 1 : 0
    }

    def getStringWochentag(d) {
        def wt = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"]
        return wt[d.getDay()]
    }

    def zeittyp(date) {
        if (this.isFeiertag(date)) {
            // REF_ZEITTYP -> Katalog Zeittyp enterty: Feiertag
            return "66EC736E14191B78823865CEE29F32053BEFC296"
        }
        if (date.getDay() == 0 || date.getDay() == 6) {
            // REF_ZEITTYP -> Katalog Zeittyp enterty: Wochenende
            return "115644F98301C17B54CB091021555D1A31F6B619"
        }
    }

    def getActualArbeitzeiten(date) {
        if (this.arbeitszeiten.size() > 0) {
            def dateFormat = new SimpleDateFormat("yyyy-MM-dd")
            def parsedDate = dateFormat.parse(date.format("yyyy-MM-dd"))
            def found = Arbeitszeiten.findAll { az ->
                def azDate = dateFormat.parse(az.DT_VON.format("yyyy-MM-dd"))
                azDate.before(parsedDate) || azDate.equals(parsedDate)
            }.sort { a, b ->
                def dateA = dateFormat.parse(a.DT_VON.format("yyyy-MM-dd"))
                def dateB = dateFormat.parse(b.DT_VON.format("yyyy-MM-dd"))
                dateB.compareTo(dateA)
            }
            return found.size() > 0 ? found[0] : null
        }
        return null

    }

    def zeitsoll(output, datum) {
        this.loadArbeitzeiten()
        long sollinsekunden = 0
        long sollstunden = 0
        long sollminuten = 0
        long sollsekunden = 0

        def arbeitzeitItem = this.getActualArbeitzeiten(datum)

        if (arbeitzeitItem) {
            def arbeitszeitInSeconds
            def day = datum.getDay()
            def wochentag = this.getStringWochentag(datum)

            if (arbeitzeitItem['B_WOCHENIDENTISCH'] == true) {
                arbeitszeitInSeconds = arbeitzeitItem["L_ARBEITSZEIT${wochentag}INSEKUNDEN"]
            } else {
                Calendar calendar = Calendar.getInstance()
                calendar.setTime(datum)
                int weekNumber = calendar.get(Calendar.WEEK_OF_YEAR)
                if (weekNumber & 1) {
                    arbeitszeitInSeconds = arbeitzeitItem["L_UWARBEITSZEIT${wochentag}INSEKUNDEN"]
                } else {
                    arbeitszeitInSeconds = arbeitzeitItem["L_ARBEITSZEIT${wochentag}INSEKUNDEN"]
                }
            }

            def millis = arbeitszeitInSeconds * 1000
            def hours = TimeUnit.MILLISECONDS.toHours(millis)
            def minutes = TimeUnit.MILLISECONDS.toMinutes(millis) % TimeUnit.HOURS.toMinutes(1)
            def seconds = TimeUnit.MILLISECONDS.toSeconds(millis) % TimeUnit.MINUTES.toSeconds(1)
            def isFeiertag = this.isFeiertag(datum.toTimestamp())

            sollinsekunden = isFeiertag == 1 ? 0 : arbeitszeitInSeconds
            sollstunden = isFeiertag == 1 ? 0 : hours
            sollminuten = isFeiertag == 1 ? 0 : minutes
            sollsekunden = isFeiertag == 1 ? 0 : seconds
        }
        if (output == "Sekunden") {
            return sollinsekunden
        }
        if (output == "Zeit") {
            DecimalFormat df = new DecimalFormat("00")
            return df.format(sollstunden) + ":" + df.format(sollminuten) + ":" + df.format(sollsekunden)
        }
    }

    def loadFeiertage() {
        if (this.feiertage != null) return
        def conn = glob.g_dbConnections.systemConnection
        def stmt = null
        def rs = null

        try {   // Feiertage FT_T_FEIERTAGE
            stmt = glob.g_dbQuery.prepare(conn, """SELECT DT_DATUM FROM DATAGROUP('0E913916F7C66CA6359244B7A7F08A0266A3B0E3') WHERE L_JAHR  in (${this.years.join(', ')})""")
            //stmt.setInt(1, 2024)
            rs = stmt.executeQuery()
            this.feiertage = []
            while (rs.next()) {
                this.feiertage.push(rs.getDateValue(1))
            }
            rs = Safely.close(rs)
            stmt = Safely.close(stmt)
        }
        finally {
            rs = Safely.close(rs)
            stmt = Safely.close(stmt)
        }
    }

    def loadArbeitzeiten() {
        if (this.arbeitszeiten != null) return
        def _arbeitsZeiten = []
        def stmt = null
        def rs = null
        try {   //Personal-Arbeitszeiten PER_T_PERS_AZK
            stmt = glob.g_dbQuery.prepare(glob.g_dbConnections.systemConnection,
                    """
					SELECT
						L_ARBEITSZEITSOINSEKUNDEN,
						L_ARBEITSZEITMOINSEKUNDEN,
						L_ARBEITSZEITDIINSEKUNDEN,
						L_ARBEITSZEITMIINSEKUNDEN,
						L_ARBEITSZEITDOINSEKUNDEN,
						L_ARBEITSZEITFRINSEKUNDEN,
						L_ARBEITSZEITSAINSEKUNDEN,
						L_UWARBEITSZEITSOINSEKUNDEN,
						L_UWARBEITSZEITMOINSEKUNDEN,
						L_UWARBEITSZEITDIINSEKUNDEN,
						L_UWARBEITSZEITMIINSEKUNDEN,
						L_UWARBEITSZEITDOINSEKUNDEN,
						L_UWARBEITSZEITFRINSEKUNDEN,
						L_UWARBEITSZEITSAINSEKUNDEN,
						B_WOCHENIDENTISCH,
						DT_VON
					FROM
						DATAGROUP('8BC2D0CB36C1E9B014EE8E6937F43756B7637244') AZ
						INNER JOIN DATAGROUP('209BDA287EB1D8AFBF76C43A1CCCB78A39D170CD') P ON
							AZ.FKSTRID = P.STRID
					WHERE
						P.STRID = ?
					ORDER BY
						DT_VON DESC
		""")
            stmt.setString(1, this.stridPersonal)
            rs = stmt.executeQuery()

            while (rs.next()) {
                def _arbeitsZeit = [
                        L_ARBEITSZEITSOINSEKUNDEN  : rs.getIntValue(1),
                        L_ARBEITSZEITMOINSEKUNDEN  : rs.getIntValue(2),
                        L_ARBEITSZEITDIINSEKUNDEN  : rs.getIntValue(3),
                        L_ARBEITSZEITMIINSEKUNDEN  : rs.getIntValue(4),
                        L_ARBEITSZEITDOINSEKUNDEN  : rs.getIntValue(5),
                        L_ARBEITSZEITFRINSEKUNDEN  : rs.getIntValue(6),
                        L_ARBEITSZEITSAINSEKUNDEN  : rs.getIntValue(7),
                        L_UWARBEITSZEITSOINSEKUNDEN: rs.getIntValue(8),
                        L_UWARBEITSZEITMOINSEKUNDEN: rs.getIntValue(9),
                        L_UWARBEITSZEITDIINSEKUNDEN: rs.getIntValue(10),
                        L_UWARBEITSZEITMIINSEKUNDEN: rs.getIntValue(11),
                        L_UWARBEITSZEITDOINSEKUNDEN: rs.getIntValue(12),
                        L_UWARBEITSZEITFRINSEKUNDEN: rs.getIntValue(13),
                        L_UWARBEITSZEITSAINSEKUNDEN: rs.getIntValue(14),
                        B_WOCHENIDENTISCH          : rs.getBooleanValue(15),
                        DT_VON                     : rs.getDateValue(16)
                ]
                _arbeitsZeiten.add(_arbeitsZeit)
            }
        }
        finally {
            rs = Safely.close(rs)
            stmt = Safely.close(stmt)
        }
        this.arbeitszeiten = _arbeitsZeiten
    }
}

class MonthsDaysCash {
    def glob
    def year
    def month
    def days = []
    def daysLoaded = false
    def dataFormat = 'yyyy-MM-dd'

    def MonthsDaysCash(months, glob) {
        this.month = months
        this.glob = glob
    }

    def getMonthStrid(date) {
        def jahr = date.getYear() + 1900
        def monat = date.getMonth() + 1
        def existingYear = month[jahr]
        if (!existingYear) return null
        def existingMonth = month[jahr][monat]
        if (!existingMonth) return null
        return this.month[jahr][monat].strid
    }

    def getMonthStrids() {
        def allStrids = []
        this.month.each { year, months ->
            months.each { monthIndex, data ->
                allStrids.add(data.strid)
            }
        }
        return allStrids
    }

    def getDay(day) {
        this.loadDays()
        return this.days.find { it.date == day.format(this.dataFormat) }
    }

    def loadDays() {
        if (this.daysLoaded) return
        def monthStrits = this.getMonthStrids()
        def quotedStrids = monthStrids.collect { "'${it}'" }
        def conn = this.glob.g_dbConnections.systemConnection
        def stmt = null
        def rs = null
        try {
            stmt = this.glob.g_dbQuery.prepare(conn, "SELECT DT_DATUM ,STRID FROM DATAGROUP('C7ABD7C9D520E5CEA6C1929D211894AD7A8EBBF9') WHERE FKSTRID IN(${quotedStrids.join(', ')})")
            rs = stmt.executeQuery()
            while (rs.next()) {
                this.days.push(["date": rs.getTimestampValue(1).format(this.dataFormat), "STRID": rs.getStringValue(2)])
            }
            rs = Safely.close(rs)
            stmt = Safely.close(stmt)
        }
        finally {
            rs = Safely.close(rs)
            stmt = Safely.close(stmt)
        }
        this.daysLoaded = true
    }
}
