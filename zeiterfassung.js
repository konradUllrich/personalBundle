// JavaScript Document
function loadZeiterfassung() {
  var strControlName = "textvcontrolD592093D";
  var strOperator = "==";
  var strValue = "SA";
  var strColor = "#F1F1F1";
  var colored = "row";

  inkingString(strControlName, strOperator, strValue, strColor, colored);

  strValue = "SO";
  inkingString(strControlName, strOperator, strValue, strColor, colored);
}
function neueUnterbrechung() {
  $("[name='U_VON']")[0].focus();
  return true;
}
function statistikGesamtEinfaerben() {
  var strControlName = "textvcontrolA0889D42";
  var strOperator = "==";
  var strValue = "Gesamt";
  var strColor = "lightgrey";
  var colored = "row";

  inkingString(strControlName, strOperator, strValue, strColor, colored);
}
function saveZeit() {
  var el = getElement(
    "8E94940ACB76D5DFD2C4B3DE3513F6D31C6C0872"
  ); /*Freie Tabelle Unterbrechungen  shapedtable*/
  if (calcDauerAnwesenheit() == false) {
    Notifier.element.notify(
      el,
      "Eine oder mehrere Unterbrechungszeiten liegen außerhalb der angegebenen Arbeitszeit. Bitte überprüfen Sie Ihre Eingabe!"
    );
    return false;
  } else {
    return true;
  }
}
function loadZeitzeile() {
  var result = "";
  var el = getElement(
    "DC031E4988BE44E11B5B2C643AF80A053C7F8455"
  ); /*Buchungsart  dropdowncontrol*/

  for (i = 1; i < $("[name='ANW_ART']").length; i++) {
    ix.ajax().requestAppGroovy(
      "buchungsart.groovy",
      {
        dataType: "json",
        async: false,
        success: function (data) {
          result = data.result3;
        },
      },
      el
    );

    for (k = 0; k < result.length; k++) {
      if (
        $("[name='ANW_ART']").find("option[value='" + result[k] + "']")[i] !=
        null
      ) {
        $("[name='ANW_ART']")
          .find("option[value='" + result[k] + "']")
          [i].remove();
      }
    }
  }
  return true;
}
function loadPersoenlicheBuchungsarten() {
  var result = "";
  var el = getElement(
    "DC031E4988BE44E11B5B2C643AF80A053C7F8455"
  ); /*Buchungsart  dropdowncontrol*/

  for (i = 0; i < $("[name='ANW_ART']").length; i++) {
    ix.ajax().requestAppGroovy(
      "buchungsartPersoenlich.groovy",
      {
        dataType: "json",
        async: false,
        success: function (data) {
          result = data.result;
        },
      },
      el
    );

    for (k = 0; k < result.length; k++) {
      if (
        $("[name='ANW_ART']").find("option[value='" + result[k] + "']")[i] !=
        null
      ) {
        $("[name='ANW_ART']")
          .find("option[value='" + result[k] + "']")
          [i].remove();
      }
    }
  }
  return true;
}
function commitAblehnung() {
  var begruendung = getElement(
    "D04D8378E69FA6C7C8831CFBFD9BE88B7A46731D"
  ); /*Begründung bei Ablehnung  textareacontrol*/

  if (Browser.getValue(begruendung) == "") {
    alert("Bei Ablehnung müssen Sie eine Begründung angeben!");
    return false;
  }

  return true;
}
function deleteEintrag() {
  var strid = getElement(
    "247A207A8264FA0B6A10458361E39B64F9B67FE6"
  ); /*ID  textvcontrol*/

  var z = confirm("Sollen alle Einträge des aktuellen Tages gelöscht werden?");
  if (z == true) {
    triggerUserWorkflowEvent(
      "CE9C92D5D6AC7C3CDC66F9A1C5538B26FD100263",
      { qs_eintrag: Browser.getValue(strid) },
      { async: false }
    );
    return true;
  } else {
    return false;
  }
}

function archiv() {
  var jahr = getElement(
    "1374D62747CE443E0428AE618703233CFC842D8E"
  ); /*Jahr  dropdowncontrol*/
  var monat = getElement(
    "7309F07BAB81BE0D6B2C9396159960E5884509A5"
  ); /*Monat  dropdowncontrol*/
  var bl = getElement(
    "CC6D16DBB3D27F847C8798A7D7CC4A942744C390"
  ); /*Büroleitung  dropdowncontrol*/

  if (!Browser.getValue(jahr)) {
    Notifier.element.notify(jahr, "Bitte wählen Sie ein Jahr aus!");
    return false;
  }
  if (!Browser.getValue(monat)) {
    Notifier.element.notify(jahr, "Bitte wählen Sie einen Monat aus!");
    return false;
  }
  if (!Browser.getValue(bl)) {
    Notifier.element.notify(jahr, "Bitte wählen Sie eine Büroleitung aus!");
    return false;
  }

  triggerUserWorkflowEvent("98BA996B1D6BE7AA2030C4AAF978C8B1871B6150", {
    qs_Jahr: Browser.getValue(jahr),
    qs_Monat: monat.selectedIndex,
    qs_Bl: Browser.getValue(bl),
  });
  return true;
}
function startPolling() {
  registerAjaxPolling({
    key: "pollingKey",
    success: function () {
      checkReload();
    },
    error: function () {
      errorOnPolling();
    },
    id: "pollingId",
    millisec: 1000,
  });
}

/**
 * Beendet das Polling und sollte immer im OnUnload einer Seite aufgerufen werden
 * @method stopPolling
 */
//
function stopPolling() {
  unregisterAjaxPolling("pollingKey", "pollingId");
}
function checkReload() {
  getElement("23A27E6E60624131D24EE14A56DF8A624C4A8705").oUp.reload();
  getElement("9F8219FBAD0FA2289E10684179A6E302F2474FB7").oUp.reload();
  window.setInterval("loadZeiterfassung();", 1000);

  return true;
}
function errorOnPolling() {
  //	Notifier.status.notify("Text: Error on retrieving reload information", "Titel: Polling", "ID: MyId");
}

function changeBuchungsart() {
  var result = "";
  var el = getElement(
    "DC031E4988BE44E11B5B2C643AF80A053C7F8455"
  ); /*Buchungsart  dropdowncontrol*/
  ix.ajax().requestAppGroovy(
    "buchungsart.groovy",
    {
      dataType: "json",
      async: false,
      data: {
        buchungsart: Browser.getValue(el),
      },
      success: function (data) {
        result = data.result2;
      },
    },
    el
  );

  if (result == "1") {
    $(document.getElementById("ID_gridcontainerrowD6EE4C50")).hide();
  } else {
    $(document.getElementById("ID_gridcontainerrowD6EE4C50")).show();
  }

  return true;
}
function loadMeineZeiten() {
  var o_jahr = getElement(
    "62B15BC5B09EB8B79D6AB940E59169A9EA0A71CD"
  ); /*Jahr 2  dropdowncontrol*/
  $(o_jahr).change();
}

function setZusatzdaten(zeilen, unterbrechungen) {
  var zd = getElement(
    "5B1AE499A4CEFB2FF8659CCA51081225FA61E5A2"
  ); /*Zusatzdaten  textcontrol*/

  Browser.setValue(zd, "");

  if (zeilen > 0) {
    Browser.setValue(zd, "Zeiten (" + zeilen + ")");
  }
  if (unterbrechungen > 0) {
    Browser.setValue(
      zd,
      Browser.getValue(zd) + ", Unterbrechungen (" + unterbrechungen + ")  "
    );
  }
}
function getSaldoberechnung() {
  var result = "";
  var result2 = "";
  var el = getElement(
    "DC031E4988BE44E11B5B2C643AF80A053C7F8455"
  ); /*Buchungsart  dropdowncontrol*/
  ix.ajax().requestAppGroovy(
    "buchungsart.groovy",
    {
      dataType: "json",
      async: false,
      data: {
        buchungsart: Browser.getValue(el),
      },
      success: function (data) {
        result = data.result;
      },
    },
    el
  );
  ix.ajax().requestAppGroovy(
    "ganzertag.groovy",
    {
      dataType: "json",
      async: false,
      data: {
        buchungsart: Browser.getValue(el),
      },
      success: function (data) {
        result2 = data.result;
      },
    },
    el
  );

  var o_von = getElement(
    "E05295EBA8B8CFD08D10CF1D5DEA51933672137F"
  ); /*von  timecontrol*/
  var o_bis = getElement(
    "12C3B8251FAEB47FB61E060952B3711E9FC26A03"
  ); /*bis  timecontrol*/
  var o_dauer = getElement(
    "B978B1984B9E56E02D2F5C7FCB54B64243100A27"
  ); /*Dauer  textcontrol*/

  if (result2 == "ja") {
    $(document.getElementById("ID_textactioncontrol3BC260D7")).hide();
  } else {
    $(document.getElementById("ID_textactioncontrol3BC260D7")).show();
  }

  switch (result) {
    case "Saldo = -Soll":
      Browser.setValue(o_von, "");
      Browser.setValue(o_bis, "");
      o_von.readOnly = true;
      o_bis.readOnly = true;

      Browser.setValue(document.getElementsByName("ZF_IST")[0], "00:00:00");
      Browser.setValue(document.getElementsByName("ZF_IST_DT")[0], "00:00:00");
      Browser.setValue(document.getElementsByName("ZF_IST_MIN")[0], "0");
      Browser.setValue(document.getElementsByName("ZF_IST_SEK")[0], "0");

      Browser.setValue(
        document.getElementsByName("ZF_SALDO")[0],
        "-" + document.getElementsByName("ZF_SOLL")[0].value
      );
      Browser.setValue(
        document.getElementsByName("ZF_SALDO_DT")[0],
        "00:00:00"
      );
      Browser.setValue(
        document.getElementsByName("ZF_SALDO_MIN")[0],
        -document.getElementsByName("ZF_SOLL_MIN")[0].value
      );
      Browser.setValue(
        document.getElementsByName("ZF_SALDO_SEK")[0],
        -document.getElementsByName("ZF_SOLL_SEK")[0].value
      );

      break;
    case "Saldo = 0":
      /*
			Browser.setValue(document.getElementsByName("ZF_SOLL")[0], "00:00:00");
			Browser.setValue(document.getElementsByName("ZF_SOLL_MIN")[0], "0");
			Browser.setValue(document.getElementsByName("ZF_SOLL_SEK")[0], "0");

			Browser.setValue(document.getElementsByName("ZF_IST_DT")[0], "00:00:00");
			Browser.setValue(document.getElementsByName("ZF_IST")[0], "00:00:00");
			Browser.setValue(document.getElementsByName("ZF_IST_MIN")[0], "0");
			Browser.setValue(document.getElementsByName("ZF_IST_SEK")[0], "0");
*/
      // Dienstabbruch Sonderbehandlung
      if (Browser.getValue(el) == "4BB254A2A1B06C176D3886178E61FFF4EC4C3A60") {
        o_von.readOnly = false;
        o_bis.readOnly = false;
      } else {
        Browser.setValue(o_von, "");
        Browser.setValue(o_bis, "");
        Browser.setValue(o_dauer, "");
        o_von.readOnly = true;
        o_bis.readOnly = true;
      }

      Browser.setValue(document.getElementsByName("ZF_PAUSE")[0], "00:00:00");
      Browser.setValue(document.getElementsByName("ZF_PAUSE_DT")[0], "");
      if (
        Browser.getValue(el) == "C767616C43E8E6D92920713686ADB92281B6C08C" &&
        Number(
          Browser.getValue(
            getElement("2B84DE019071F5CB0DC54DBE38BCEDDCED3347F7")
          )
        ) >
          Number(
            Browser.getValue(
              getElement("F21E8B995CF1338B134AE41D688F68E5F5641CE9")
            )
          )
      ) {
        // AZV-Tag für TZ-Kräfte
        var sek_neu =
          Number(
            Browser.getValue(
              getElement("F21E8B995CF1338B134AE41D688F68E5F5641CE9")
            )
          ) *
            0.2 -
          Number(document.getElementsByName("ZF_SOLL_SEK")[0].value);

        Browser.setValue(
          document.getElementsByName("ZF_SALDO")[0],
          setUhrzeit(sek_neu, true)
        );
        Browser.setValue(
          document.getElementsByName("ZF_SALDO_DT")[0],
          setUhrzeit(sek_neu, false)
        );
        Browser.setValue(
          document.getElementsByName("ZF_SALDO_MIN")[0],
          sek_neu / 60
        );
        Browser.setValue(
          document.getElementsByName("ZF_SALDO_SEK")[0],
          sek_neu
        );
      } else {
        Browser.setValue(document.getElementsByName("ZF_SALDO")[0], "00:00:00");
        Browser.setValue(
          document.getElementsByName("ZF_SALDO_DT")[0],
          "00:00:00"
        );
        Browser.setValue(document.getElementsByName("ZF_SALDO_MIN")[0], "0");
        Browser.setValue(document.getElementsByName("ZF_SALDO_SEK")[0], "0");
      }

      Browser.setValue(
        document.getElementsByName("ZF_IST")[0],
        document.getElementsByName("ZF_SOLL")[0].value
      );
      Browser.setValue(
        document.getElementsByName("ZF_IST_DT")[0],
        document.getElementsByName("ZF_SOLL")[0].value
      );
      Browser.setValue(
        document.getElementsByName("ZF_IST_MIN")[0],
        document.getElementsByName("ZF_SOLL_MIN")[0].value
      );
      Browser.setValue(
        document.getElementsByName("ZF_IST_SEK")[0],
        document.getElementsByName("ZF_SOLL_SEK")[0].value
      );

      break;

    default:
      o_von.readOnly = false;
      o_bis.readOnly = false;
  }
}
function getPause(Sekunden) {
  var result = 0;
  var el = getElement(
    "3ABCBC3630AFDEEFAD43B3679F9C2FADCDEB88E1"
  ); /*Pause  timecontrol*/
  ix.ajax().requestAppGroovy(
    "pause.groovy",
    {
      dataType: "json",
      async: false,
      data: {
        sekunden: Sekunden,
      },
      success: function (data) {
        result = data.result;
      },
    },
    el
  );

  return result;
}
function calcZusammenfassung(diff_sum, pause_sum) {
  zf_soll = document.getElementsByName("ZF_SOLL")[0];
  zf_soll_min = document.getElementsByName("ZF_SOLL_MIN")[0];
  zf_soll_sek = document.getElementsByName("ZF_SOLL_SEK")[0];
  zf_ist = document.getElementsByName("ZF_IST")[0];
  zf_ist_dt = document.getElementsByName("ZF_IST_DT")[0];
  zf_ist_min = document.getElementsByName("ZF_IST_MIN")[0];
  zf_ist_sek = document.getElementsByName("ZF_IST_SEK")[0];
  zf_saldo = document.getElementsByName("ZF_SALDO")[0];
  zf_saldo_dt = document.getElementsByName("ZF_SALDO_DT")[0];
  zf_saldo_min = document.getElementsByName("ZF_SALDO_MIN")[0];
  zf_saldo_sek = document.getElementsByName("ZF_SALDO_SEK")[0];
  zf_pause = document.getElementsByName("ZF_PAUSE")[0];
  zf_pause_dt = document.getElementsByName("ZF_PAUSE_DT")[0];

  if (diff_sum == null && pause_sum == null) {
    p = 0;
    Browser.setValue(zf_pause, setUhrzeit(p, false));
    Browser.setValue(zf_pause_dt, setUhrzeit(p, false));

    Browser.setValue(zf_ist, setUhrzeit(diff_sum - p, true));
    Browser.setValue(zf_ist_dt, setUhrzeit(diff_sum - p, false));
    zf_ist_sek.value = 0;

    Browser.setValue(zf_soll_sek, getSekunden(zf_soll));
    diff = 0;

    Browser.setValue(zf_saldo, setUhrzeit(diff, true));
    Browser.setValue(zf_saldo_dt, setUhrzeit(diff, false));
    zf_saldo_sek.value = diff;
  } else {
    p = getPause(diff_sum) + pause_sum;
    Browser.setValue(zf_pause, setUhrzeit(p, false));
    Browser.setValue(zf_pause_dt, setUhrzeit(p, false));

    Browser.setValue(zf_ist, setUhrzeit(diff_sum - p, true));
    Browser.setValue(zf_ist_dt, setUhrzeit(diff_sum - p, false));
    zf_ist_sek.value = diff_sum - p;

    Browser.setValue(zf_soll_sek, getSekunden(zf_soll));
    diff = zf_ist_sek.value - getSekunden(zf_soll);

    Browser.setValue(zf_saldo, setUhrzeit(diff, true));
    Browser.setValue(zf_saldo_dt, setUhrzeit(diff, false));
    zf_saldo_sek.value = diff;
  }
}
function getSekunden(o_Html) {
  var stunden = Browser.getValue(o_Html).substring(0, 2);
  var minuten = Browser.getValue(o_Html).substring(3, 5);
  var sekunden = Browser.getValue(o_Html).substring(6, 8);

  var wert =
    parseInt(stunden) * 3600 + parseInt(minuten) * 60 + parseInt(sekunden);

  if (!isNaN(wert)) {
    return wert;
  } else {
    return 0;
  }
}
function setUhrzeit(p_sekunden, p_vorzeichen) {
  // Millisekunden
  var sekunden = Math.abs(p_sekunden);

  // Werte berechnen
  //diff = Math.floor(p_sekunden/3600);

  var h = Math.floor(sekunden / 3600);
  var m = Math.floor((sekunden - Math.floor(sekunden / 3600) * 3600) / 60);
  var s = sekunden - h * 3600 - m * 60;

  //var h = new Date(0, 0, 0, 0, 0, p_sekunden).getHours();
  //var m = new Date(0, 0, 0, 0, 0, p_sekunden).getMinutes();
  //var s = new Date(0, 0, 0, 0, 0, p_sekunden).getSeconds();

  var stunden = ("00" + Math.abs(h)).slice(-2);
  var minuten = ("00" + Math.abs(m)).slice(-2);
  var sekunden = ("00" + Math.abs(s)).slice(-2);

  var vz = "";

  if (p_vorzeichen == true) {
    if (p_sekunden < 0) {
      vz = "-";
    }
  }

  var uhrzeit = vz + stunden + ":" + minuten + ":" + sekunden;

  return uhrzeit;
}

function calcDauerUnterbrechung() {
  calcDauerAnwesenheit();
}
function calcDauerAnwesenheit() {
  var zf_soll = document.getElementsByName("ZF_SOLL")[0];

  var max_row = document.getElementsByName("ANW_VON").length;
  var diff_sum = 0;
  var pause_sum = 0;
  var zeilen = 0;
  var unterbrechungen = 0;

  var anw_standard = document.getElementsByName("ANW_STANDARD")[0];

  for (row = 0; row < max_row; row++) {
    von = document.getElementsByName("ANW_VON")[row];
    bis = document.getElementsByName("ANW_BIS")[row];
    pausee = document.getElementsByName("ANW_PAUSE")[row];
    dauer = document.getElementsByName("ANW_DAUER")[row];
    sekunden = document.getElementsByName("ANW_SEKUNDEN")[row];

    diff = getSekunden(bis) - getSekunden(von) - getSekunden(pausee);
    diff_sum = diff_sum + diff;
    pause_sum = pause_sum + getSekunden(pausee);

    if (row == 0) {
      diff_standard = getSekunden(zf_soll);
      if (diff_standard > 21599) {
        diff_standard = diff_standard + 1800;
      }
      sollende = setUhrzeit(getSekunden(von) + diff_standard, true);
      Browser.setValue(anw_standard, sollende);

      if (getSekunden(anw_standard) > 86400) {
        sollende = setUhrzeit(getSekunden(anw_standard) - 86400, true);
      }
      if (getSekunden(von) > 0) {
        Browser.setValue(anw_standard, sollende);
      } else {
        Browser.setValue(anw_standard, "");
      }
    }

    if (getSekunden(bis) > 0 && getSekunden(von) > 0) {
      Browser.setValue(dauer, setUhrzeit(diff, true));
      Browser.setValue(sekunden, getSekunden(bis) - getSekunden(von));
    } else {
      Browser.setValue(dauer, setUhrzeit(0, true));
      Browser.setValue(sekunden, 0);
    }
  }
  zeilen = row - 1;

  max_row = document.getElementsByName("U_VON").length;
  diff_sum_u = 0;

  for (row = 0; row < max_row; row++) {
    von_u = document.getElementsByName("U_VON")[row];
    bis_u = document.getElementsByName("U_BIS")[row];
    dauer = document.getElementsByName("U_DAUER")[row];
    sekunden = document.getElementsByName("U_SEKUNDEN")[row];

    if (getSekunden(bis_u) > 0 && getSekunden(von_u) > 0) {
      diff = getSekunden(bis_u) - getSekunden(von_u);
      diff_sum_u = diff_sum_u + diff;
    } else {
      diff = 0;
      diff_sum_u = diff_sum_u + diff;
    }

    Browser.setValue(dauer, setUhrzeit(diff, true));
    Browser.setValue(sekunden, getSekunden(bis_u) - getSekunden(von_u));
  }
  unterbrechungen = row + 1;

  setZusatzdaten(zeilen, unterbrechungen);

  if (getSekunden(von) > 0 && getSekunden(bis) > 0) {
    calcZusammenfassung(diff_sum - diff_sum_u, pause_sum);
  } else {
    calcZusammenfassung(null, null);
  }

  getSaldoberechnung();

  // Überprüfung, ob U_VON < ANW_VON
  var max_row_U = document.getElementsByName("U_VON").length;
  var max_row_ANW = document.getElementsByName("ANW_VON").length;

  var treffer = true;

  if (document.getElementsByName("U_VON").length > 0) {
    treffer = false;

    for (row_U = 0; row_U < max_row_U; row_U++) {
      for (row_ANW = 0; row_ANW < max_row_ANW; row_ANW++) {
        if (
          document.getElementsByName("U_VON")[row_U].value >
            document.getElementsByName("ANW_VON")[row_ANW].value &&
          document.getElementsByName("ANW_VON")[row_ANW].value != "" &&
          document.getElementsByName("U_BIS")[row_U].value <
            document.getElementsByName("ANW_BIS")[row_ANW].value &&
          document.getElementsByName("ANW_BIS")[row_ANW].value != ""
        ) {
          treffer = true;
        }
      }
    }
  }
  return treffer;
}
