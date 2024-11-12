CREATE VIEW ZE_MONAT_VIEW AS
SELECT DISTINCT m.strid,
    m.ref_personal,
    m.L_MONAT,
    m.STR_MONAT,
    m.L_JAHR,
    m.STR_ZEITUEBERTRAG,
    m.STR_ZEITIST,
    m.STR_ZEITSALDO,
    m.REF_SALDENKONTROLLE,
    m.REF_STATUS,
    m.REF_FREIGABESTATUS,
    m.REF_BENUTZER,
    m.L_STELLVERFREIGABE,
    m.B_GELOESCHT,
    m.B_ARCHIV,
    abteilung.str_ebene1 as abteilung,
    referat.str_ebene2 as referat,
    gruppe.STR_EBENE3 as gruppe,
    p.STR_VOLLERNAME,
    p.REF_FK_BENUTZER,
    p.REF_FK_PERSONAL,
    p.STR_FUEHRUNGSKRAFT,
    p.STR_STELLENZEICHEN,
    p.ref_bl,
    sum(
        zeit.l_dauersekunden
        where zeit.ref_buchungsart =
    ),
    -- Alle Maßnahmen in einer Spalte vereinen.
    (
        SELECT string_agg(zm.TXT_MASSNAHMEN, '; ')
        FROM ZE_T_M_MASSNAHMEN zm
        WHERE zm.FKSTRID = m.strid
    ) AS txt_massnahmen
FROM ZE_T_MONAT m
    left JOIN PER_T_PERSONAL p ON m.REF_PERSONAL = p.STRID
    left JOIN per_t_orga1 abteilung ON abteilung.strid = p.str_orgaebene1
    left JOIN per_t_orga2 referat ON referat.strid = p.str_orgaebene2
    left join PER_T_ORGA3 gruppe on gruppe.STRID = p.STR_ORGAEBENE3
    left join ze_t_m_datum datum on datum.FKSTRID = m.strid
    left join ze_t_m_d_zeiten zeit on zeit.FKSTRID = datum.strid
GROUP BY m.strid,
    m.ref_personal,
    m.L_MONAT,
    m.STR_MONAT,
    m.L_JAHR,
    m.STR_ZEITUEBERTRAG,
    m.STR_ZEITIST,
    m.STR_ZEITSALDO,
    m.REF_SALDENKONTROLLE,
    m.REF_STATUS,
    m.REF_FREIGABESTATUS,
    m.REF_BENUTZER,
    m.L_STELLVERFREIGABE,
    m.B_GELOESCHT,
    m.B_ARCHIV,
    abteilung.str_ebene1,
    referat.str_ebene2,
    gruppe.STR_EBENE3,
    p.STR_VOLLERNAME,
    p.REF_FK_BENUTZER,
    p.REF_FK_PERSONAL,
    p.STR_FUEHRUNGSKRAFT,
    p.STR_STELLENZEICHEN,
    p.ref_bl Drop view ze_monat_view
select *
from ze_monat_view
where ref_benutzer = 175
order by l_jahr,
    l_monat