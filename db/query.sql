SELECT 
  e.first_name,
  e.last_name,
  d.department_name,
  r.role_title,
  r.salary
FROM employees AS e
LEFT JOIN roles r
ON e.role_id = r.r_id
LEFT JOIN departments d
on r.department_id = d.d_id;