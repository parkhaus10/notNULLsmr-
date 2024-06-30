BEGIN TRANSACTION;

DELETE FROM project WHERE id = ?;

COMMIT;

-- ? — это параметр, который нужно заменить на id проекта, который требуется удалить.

BEGIN TRANSACTION;

-- Перенос данных в ProjectStatus
INSERT INTO ProjectStatus (project_id, name, current_status, current_date, start_date)
SELECT p.id, p.name, 'удалён', CURRENT_DATE, MIN(s.enter_date)
FROM project p
LEFT JOIN status s ON p.id = s.project_id
WHERE p.id = ?;

-- Удаление данных из project
DELETE FROM project WHERE id = ?;

COMMIT;