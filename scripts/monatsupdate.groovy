import java.util.concurrent.TimeUnit
def conn = g_dbConnections.systemConnection

def startTime = new Date().getTime()

def monate_archivierung = 6

def aMonat = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]

def statusNEW = g_dbQuery.executeAndGetScalarValue(conn, "SELECT STRID FROM DATAGROUP('35D3D755857E061539B3C973CECE51516289B008') WHERE STR_ID = ?", null) {
	setString(1, "NEW")
}
def statusNOTAPPROVED = g_dbQuery.executeAndGetScalarValue(conn, "SELECT STRID FROM DATAGROUP('D8B9CA758DF1DAC8DAD77B1F16B5726D67B3AD7B') WHERE STR_ID = ?", null) {
	setString(1, "NOTAPPROVED")
}
def statusAPPROVED = g_dbQuery.executeAndGetScalarValue(conn, "SELECT STRID FROM DATAGROUP('D8B9CA758DF1DAC8DAD77B1F16B5726D67B3AD7B') WHERE STR_ID = ?", null) {
	setString(1, "APPROVED")
}

def zeit(sekunden) {
	// Sekunden in in Zeit-String ausgeben
	long millis = sekunden * 1000
	long hours = TimeUnit.MILLISECONDS.toHours(millis)
	long minutes = TimeUnit.MILLISECONDS.toMinutes(millis) % TimeUnit.HOURS.toMinutes(1)
	long seconds = TimeUnit.MILLISECONDS.toSeconds(millis) % TimeUnit.MINUTES.toSeconds(1)

	if(sekunden < 0) {
		return String.format("-%02d:%02d:%02d", Math.abs(hours), Math.abs(minutes), Math.abs(seconds));
	} else {
		return String.format("%02d:%02d:%02d", Math.abs(hours), Math.abs(minutes), Math.abs(seconds));
	}
}

g_sharedState.excitingMonths = [:]

g_sharedState.jahrVon.upto(g_sharedState.jahrBis) {

	jahr = it.toInteger()

    g_sharedState.excitingMonths[jahr]=[:]


	aMonat.eachWithIndex { m, i ->
		strid = newGuid()
//		if(i == 0)	{g_sharedState.jan = strid}
//		if(i == 1) 	{g_sharedState.feb = strid}
//		if(i == 2) 	{g_sharedState.mrz = strid}
//		if(i == 3) 	{g_sharedState.apr = strid}
//		if(i == 4) 	{g_sharedState.mai = strid}
//		if(i == 5) 	{g_sharedState.jun = strid}
//		if(i == 6) 	{g_sharedState.jul = strid}
//		if(i == 7) 	{g_sharedState.aug = strid}
//		if(i == 8) 	{g_sharedState.sep = strid}
//		if(i == 9) 	{g_sharedState.okt = strid}
//		if(i == 10) {g_sharedState.nov = strid}
//		if(i == 11) {g_sharedState.dez = strid}


		if((jahr == g_sharedState.jahrVon && i >= g_sharedState.monatStart - 1) || jahr > g_sharedState.jahrVon) {

			// Prüfung, ob Zeiterfassungsbogen bereits vorhanden ist
			value = g_dbQuery.executeAndGetScalarValue(conn, "SELECT STRID FROM DATAGROUP('61C70E61D9F8B2D163CE4DDBB0D99A1009ABDDC2') WHERE L_JAHR = ? AND L_MONAT = ? AND REF_BENUTZER = ?", null) {
				setInt(1, jahr)
				setInt(2, i+1)
				setInt(3, g_sharedState.lidBenutzer)
			}

			// Bogen vorhanden
			if(value) {

					g_sharedState.excitingMonths[jahr][i+1]=[strid:value ,monthIndex:i,month:m,year:jahr]

/*
 * STATUSANPASSUNGEN VON BÖGEN ZUNÄCHST HERAUSGENOMMEN.
 * NOCHMALIGE FACHLICHE KLÄRUNG ZUM AKTUELLEN PUNKT EINHOLEN.
 *
				g_dbQuery.executeUpdate(conn, """
					UPDATE
						DATAGROUP('61C70E61D9F8B2D163CE4DDBB0D99A1009ABDDC2')
					SET
						REF_STATUS = ?,
						REF_FREIGABESTATUS = ?,
						B_ARCHIV = ?,
						DT_LOESCHDATUM = ?
					WHERE
						STRID = ?
					AND
						REF_FREIGABESTATUS != ?
				""") {
					setString(1, statusNEW)
					setString(2, statusNOTAPPROVED)
					setBoolean(3, false)
					use (groovy.time.TimeCategory)
					{
						setTimestamp(4, new Date(jahr - 1900, i, 1) - monate_archivierung.months)
					}
					setString(5, value)
					setString(6, statusAPPROVED)
				}

				// Journaaleintrag zum Zeiterfassungsbogen hinzufügen
				g_dbQuery.executeUpdate(conn, """
					INSERT INTO
						DATAGROUP('1DA503E3DE54727EA703FA8C0DECB5B1C503A986')
						(FKSTRID,STRID,LUSERID,LUSERIDINSERT,DTEDIT,DTINSERT,STR_AKTION,TXT_NOTIZ)
					VALUES
						(?,?,?,?,?,?,?,?)
				""") {
					setString(1, value)
					setString(2, newGuid())
					setInt(3, g_session?.user?.id)
					setInt(4, g_session?.user?.id)
					setTimestamp(5, now().withoutFractionalSeconds)
					setTimestamp(6, now().withoutFractionalSeconds)
					setString(7, "Statusänderung")
					setString(8, "Der Status des Zeiterfassungsbogen wurde aufgrund einer Anpassung in den Personaldaten zurückgesetzt (z.B. Änderung Übertrag, Neuanlage Zeiterfassungsbögen).")
				}
*/

			} else {
				g_log.info("create Bogen")
				// Bogen ist noch nicht vorhanden, dann neu anlegen
				g_dbQuery.executeUpdate(conn, """
					INSERT INTO
						DATAGROUP('61C70E61D9F8B2D163CE4DDBB0D99A1009ABDDC2')
						(STRID,
						LUSERID,
						LUSERIDINSERT,
						DTEDIT,
						DTINSERT,
						STR_MONAT,
						L_MONAT,
						L_JAHR,
						REF_BENUTZER,
						REF_PERSONAL,
						STR_MITARBEITERIN,
						REF_BL,
						REF_FK_PERSONAL,
						STR_FUEHRUNGSKRAFT,
						REF_FK_BENUTZER,
						REF_STATUS,
						REF_FREIGABESTATUS,
						STR_ZEITIST,
						L_ZEITISTSEKUNDEN
						)
					VALUES
						(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)""") {
					setString(1, strid)
					setInt(2, 1)
					setInt(3, 1)
					setTimestamp(4, now().withoutFractionalSeconds)
					setTimestamp(5, now().withoutFractionalSeconds)
					setString(6, m)
					setInt(7, i+1)
					setInt(8, jahr)
					setInt(9, g_sharedState.lidBenutzer)
					setString(10, g_sharedState.stridPersonal)
					setString(11, g_sharedState.namePersonal)
					setString(12, g_sharedState.stridBL)
					setString(13, g_sharedState.stridFK)
					setString(14, g_sharedState.nameFK)
					setInt(15, g_sharedState.lidBenutzerFK)
					setString(16, statusNEW)
					setString(17, statusNOTAPPROVED)
					setString(18, "00:00:00")
					setInt(19, 0)
//					use (groovy.time.TimeCategory)
//					{
//						setTimestamp(20, new Date(jahr - 1900, i, 1) + monate_archivierung.months)
//					}

				}
				g_sharedState.excitingMonths[jahr][i+1]=[strid:strid ,month:m,monthIndex:i ,year:jahr]

			}
		}
	}
}

def endTime= new Date().getTime()
def sumTime= (endTime - startTime) / 1000
g_log.info("""
MONAT:
startTime : $startTime
endTime : $endTime
sumTime : $sumTime
""")

