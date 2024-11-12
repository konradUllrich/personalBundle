CREATE OR REPLACE VIEW ze_times AS
SELECT m.strid monthId,
    z.strid,
    m.l_jahr,
    m.l_monat,
    per.strid ref_personal,
    d.dt_datum,
    z.l_dauersekunden,
    per.str_vollername,
    u.strfullname,
    ba.str_buchungsart,
    z.ref_buchungsart,
    ba.str_berechnungsaldo,
    u.lid
FROM ze_t_m_d_zeiten z
    left join ze_t_m_datum d ON d.strid = z.fkstrid
    left join ze_t_monat m ON m.strid = d.fkstrid
    left join ze_kat_buchungsart ba on z.ref_buchungsart = ba.strid
    left join per_t_personal per on per.strid = m.ref_personal
    left join dsuser u on per.ref_benutzer = u.lid
ORDER BY m.l_jahr,
    m.l_monat,
    d.dt_datum;

DROP VIEW ze_times;

SELECT *
from ze_times
WHERE lid = 191
    AND l_jahr = 2024
    AND l_monat = 1
SELECT sum(l_dauersekunden)
from ze_times
WHERE lid = 191
    AND l_jahr = 2024
    AND l_monat = 1
select *
from ze_t_monat
where ref_benutzer = 192;

select *
from ze_t_m_d_zeiten
where fkstrid in (
        select strid
        from ze_t_m_datum
        where fkstrid in(
                select strid
                from ze_t_monat
                where ref_benutzer = 192
            )
    )
SELECT (
        SELECT sum(l_dauersekunden)
        from ze_times
        WHERE ref_personal = 'B6FF11A7FCEF4789E55BA45C75F06824E8837C62'
            and l_monat = 3
            and l_jahr = 2023
    ) month3sec,
    (
        SELECT TO_CHAR(
                make_interval(secs => sum(l_dauersekunden)),
                'HH24:MI:SS'
            )
        from ze_times
        WHERE ref_personal = 'B6FF11A7FCEF4789E55BA45C75F06824E8837C62'
            and l_monat = 3
            and l_jahr = 2023
    ) month3,
    (
        SELECT TO_CHAR(
                make_interval(secs => sum(l_dauersekunden)),
                'HH24:MI:SS'
            )
        from ze_times
        WHERE ref_personal = 'B6FF11A7FCEF4789E55BA45C75F06824E8837C62'
            and dt_datum < '2023-03-1'
    ) month3running,
    (
        SELECT TO_CHAR(
                make_interval(secs => sum(l_dauersekunden)),
                'HH24:MI:SS'
            )
        from ze_times
        WHERE ref_personal = 'B6FF11A7FCEF4789E55BA45C75F06824E8837C62'
    ) all
SELECT *
from ze_times
WHERE ref_personal = 'B6FF11A7FCEF4789E55BA45C75F06824E8837C62'
select *
FROM ze_t_m_d_zeiten
WHERE l_dauersekunden > 0
select *
FROM ze_t_m_datum
select *
from ze_t_monat