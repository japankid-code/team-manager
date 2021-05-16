SELECT (e.first_name)
FROM employees AS e
LEFT JOIN roles r
ON e.role_id = r.id;