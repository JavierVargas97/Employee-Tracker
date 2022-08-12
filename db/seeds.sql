
INSERT INTO department (name)
 VALUES ("Sales"), 
		("Engineering"),
        ("Finance"),
        ("Laws");
        
INSERT INTO role (title, salary, department_id)

VALUES
	("Sales Lead", 100000, 1),
	("Sales person", 80000, 1),
    ("Lead Engineer", 150000, 2),
	("Software Engineer", 120000, 2),
	("Account Manager", 160000, 3),
	("Accountant", 125000, 3),
	("Legal Team Lead", 250000, 4),
	("Lawyer", 190000, 4);

INSERT INTO manager (first_name, last_name)
VALUES
  ("Peter", "Parker"),
  ("Clark", "Kent"),
  ("Tony", "Stark");

INSERT INTO employee (first_name, last_name, role_id, manager_id)

VALUES
	  ("Jhon", "Lennon", 1, 1),
	  ("Akira", "Toriyama", 2, 2),
	  ("Sasuke", "Uchiha", 3, 2),
	  ("Luis", "Miguel", 4, NULL),
	  ("Harry", "Potter", 5, 1),
	  ("Johny", "Deep", 6, NULL),
	  ("Robert", "De Niro", 7, NULL),
	  ("Drake", "Paker", 8, 3);
    