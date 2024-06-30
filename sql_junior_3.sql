SELECT *
FROM t1
JOIN t2 ON t1.id_project = t2.project_id
WHERE t1.project_description IS NOT NULL
ORDER BY RAND()
LIMIT 250;