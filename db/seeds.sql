INSERT INTO departments (department_name)
VALUES 
  ('Executive'),
  ('Engineering'),
  ('Automation');

INSERT INTO roles (role_title, salary, department_id)
VALUES 
  ('President', 192345, 1),
  ('Engineer', 8345, 2),
  ('Manager', 82345, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
  ('Romald', 'Firbumken', 1, NULL),
  ('Ronald', 'Firbank', 3, 1),
  ('Donald', 'Purrbank', 3, 1),
  ('Jonald', 'Sirbank', 2, 1),
  ('Nonald', 'Lirbank', 2, 3),
  ('Wonald', 'Wirbank', 2, 3),
  ('Ponald', 'Firbansk', 2, 3),
  ('Zonald', 'Girbank', 2, 3),
  ('Yonald', 'Dirbank', 2, 3),
  ('Fonald', 'Rirbank', 2, 3),
  ('Ronaldo', 'Hirbunks', 2, 2),
  ('Shoneld', 'Fistbunk', 2, 2),
  ('Geonald', 'Firstbonk', 2, 2),
  ('Honald', 'Nirbunk', 2, 2),
  ('Thomald', 'Firbaumsk', 2, 2);