SELECT 
    DATE_FORMAT(DATE_ADD(MAX(date), INTERVAL 10 DAY), '%d/%m/%Y')
FROM 
    t1;