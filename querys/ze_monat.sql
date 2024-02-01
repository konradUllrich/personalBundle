CREATE VIEW ze_v_datum AS
SELECT
    d.dt_datum AS datum,
    d.str_wochentag AS WD_M,
    FORMAT(CAST(d.dt_datum AS DATE), 'ddd', 'de-de') AS BLA
FROM ze_t_m_datum d
JOIN ze_t_monat m ON m.strid = d.fkstrid
JOIN per_t_personal p On m.ref_personal = p.strid



Drop view  ze_v_datum

SELECT * FROM ze_v_datum



SELECT 
dt_datum
str_wochentag, 
FORMAT(CAST(dt_datum AS DATE), 'ddd', 'de-de') AS BLA
FROM ze_t_m_datum

SELECT dtinsert::varchar FROM ze_t_m_d_zeiten
ORDER BY dtinsert DESC

SELECT * FROM ze_t_monat

SELECT * FROM per_t_personal

SELECT * FROM per_t_pers_azk


SELECT * 
FROM per_t_pers_azk 
WHERE fkstrid = 'ADBC4F1B2539ADF0AAF0D25758AA1E52DDA3E2F9'
AND dt_von < '2023-10-20'::date
ORDER BY dt_von DESC
LIMIT 1