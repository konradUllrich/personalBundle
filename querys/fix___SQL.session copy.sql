--599789525
-- GET MONTH WITHOUT REF_BENUTZER 24
SELECT
    COUNT(*)
FROM
    ZE_T_MONAT
WHERE 
   COUNT(*) > 36
GROUP BY
    REF_BENUTZER

-- GET MONTH WITHOUT REF_BENUTZER 24
SELECT
    m.STR_MITARBEITERIN,
    COUNT(d.fkstrid) / 365 AS DATERECS,
    COUNT(t.fkstrid) / 365 AS TIMERECS
FROM
    ZE_T_MONAT m
    LEFT JOIN ZE_T_M_DATUM d ON d.fkstrid = m.strid
    LEFT JOIN ZE_T_M_D_ZEITEN t ON t.fkstrid = d.strid
WHERE
    m.REF_BENUTZER IS NULL
GROUP BY
    m.STR_MITARBEITERIN
    -- SELECT ZE_T_M_DATUM WITHOUT REF_BENUTZER  24 * 366
WITH
    months AS (
        SELECT
            strid
        FROM
            ZE_T_MONAT
        WHERE
            REF_BENUTZER IS NULL
    );

SELECT
    COUNT(*)
FROM
    ZE_T_M_DATUM
WHERE
    fkstrid IN (
        SELECT
            strid
        FROM
            months
    );

-- SELECT ZE_T_M_D_ZEITEN WITHOUT REF_BENUTZER  24 * 366
WITH
    months AS (
        SELECT
            strid
        FROM
            ZE_T_MONAT
        WHERE
            REF_BENUTZER IS NULL
    ),
    dates AS (
        SELECT
            strid
        FROM
            ZE_T_M_DATUM
        WHERE
            fkstrid IN (
                SELECT
                    strid
                FROM
                    months
            )
    )
SELECT
    COUNT(*)
FROM
    ZE_T_M_D_ZEITEN
WHERE
    fkstrid IN (
        SELECT
            strid
        FROM
            dates
    );

-- ERASE ------------------------------------------------------
-- ERASE ZE_T_M_D_ZEITEN WITHOUT REF_BENUTZER
WITH
    months AS (
        SELECT
            strid
        FROM
            ZE_T_MONAT
        WHERE
            REF_BENUTZER IS NULL
    ),
    dates AS (
        SELECT
            strid
        FROM
            ZE_T_M_DATUM
        WHERE
            fkstrid IN (
                SELECT
                    strid
                FROM
                    months
            )
    )
DELETE FROM ZE_T_M_D_ZEITEN
WHERE
    fkstrid IN (
        SELECT
            strid
        FROM
            dates
    );

-- ERASE ZE_T_M_DATUM WITHOUT REF_BENUTZER
WITH
    months AS (
        SELECT
            strid
        FROM
            ZE_T_MONAT
        WHERE
            REF_BENUTZER IS NULL
    )
DELETE FROM ZE_T_M_DATUM
WHERE
    fkstrid IN (
        SELECT
            strid
        FROM
            months
    );

-- ERASE ZE_T_MONAT WITHOUT REF_BENUTZER
DELETE FROM ZE_T_MONAT
WHERE
    REF_BENUTZER IS NULL;