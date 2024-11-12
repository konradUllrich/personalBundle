WITH target_rows_to_utc AS (
    SELECT dt_datum
    FROM ze_t_m_datum
    WHERE CAST(dt_datum AS TIME) = '00:00:00'
) -- Step 2: Update the rows to convert the time zone to 'Europe/Berlin'
UPDATE ze_t_m_datum
SET dt_datum = (dt_datum AT TIME ZONE 'Europe/Berlin') AT TIME ZONE 'UTC'
WHERE dt_datum IN (
        SELECT dt_datum
        FROM target_rows_to_utc
    );
SELECT (
        CAST('2023-11-25 00:00:00' AS TIMESTAMP) AT TIME ZONE 'Europe/Berlin'
    ) AT TIME ZONE 'UTC' -- ------------------------------------------------------------------ fixing kw
    WITH target_rows_fix_kw AS (
        SELECT dt_datum
        FROM ze_t_m_datum
    )
UPDATE ze_t_m_datum
SET l_kw = EXTRACT(
        WEEK
        FROM (dt_datum AT TIME ZONE 'UTC') AT TIME ZONE 'Europe/Berlin'
    )
WHERE dt_datum IN (
        SELECT dt_datum
        FROM target_rows_fix_kw
    );