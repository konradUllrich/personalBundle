SELECT *
FROM ze_t_monat
WHERE l_jahr = 2025
    AND l_monat = 3
    AND ref_personal = '7737FF51CE91DEFD64A333E226C49A348AEB80A2';


SELECT D.STRID
FROM ze_t_m_Datum D
    JOIN ze_t_monat M ON D.FKSTRID = M.STRID
WHERE to_char(DT_DATUM + interval '2 hour', 'yyyy-MM-dd') = '2025-01-01'
    AND M.REF_BENUTZER = null;

SELECT *
FROM ze_t_m_Datum
WHERE FKSTRID is Null;



DELETE From ze_t_m_d_zeiten
WHERE fkstrid in (
        SELECT strid
        FROM ze_t_m_Datum
        WHERE FKSTRID is Null
    );
DELETE FROM ze_t_m_Datum
WHERE FKSTRID is Null;