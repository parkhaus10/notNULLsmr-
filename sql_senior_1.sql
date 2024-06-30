CREATE TABLE ProjectStatus (
    project_id INT,
    name VARCHAR(255),
    current_status VARCHAR(255),
    current_date DATE,
    start_date DATE
);

INSERT INTO ProjectStatus (project_id, name, current_status, current_date, start_date)
SELECT p.id, p.name, s.status, s.enter_date, MIN(s.enter_date)
FROM project p
JOIN status s ON p.id = s.project_id
JOIN (
    SELECT project_id, MAX(enter_date) AS max_date
    FROM status
    GROUP BY project_id
) AS latest ON s.project_id = latest.project_id AND s.enter_date = latest.max_date
GROUP BY p.id, p.name, s.status, s.enter_date
ORDER BY s.enter_date ASC;