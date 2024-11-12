SELECT count(*),
    (
        select count(*)
        from ze_t_m_d_zeiten
        where fkstrid in (
                SELECT strid
                from ze_t_m_datum
                where fkstrid IS NULL
            )
    )
from ze_t_m_datum
where fkstrid IS NULL;

delete from ze_t_m_d_zeiten
where fkstrid in (
        SELECT strid
        from ze_t_m_datum
        where fkstrid IS NULL
    );
select *
from ze_t_m_datum
where strid = '52BD2F9213DBFBAE20E6FB33D79A4A8EF01838D2'
select *
from ze_t_m_d_zeiten
where ref_buchungsart IS NOT NULL
select l_
from PER_T_PERS_AZK