WITH
    months AS (
        SELECT
            *
        FROM
            ZE_T_MONAT
             WHERE REF_BENUTZER = 1475   
                AND L_JAHR = 2025           
    ),
    dates AS (
        SELECT
            *
        FROM
            ZE_T_M_DATUM
        WHERE
            fkstrid IN (
                SELECT
                    strid
                FROM
                    months
            )
    ),
    times AS (
        SELECT
            *
        FROM
            ZE_T_M_D_ZEITEN
        WHERE
            fkstrid IN (
                SELECT
                    strid
                FROM
                    dates
            )
    )
SELECT
    *
FROM
    times