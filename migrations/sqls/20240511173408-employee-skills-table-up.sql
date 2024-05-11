CREATE TABLE employee_skills (
  employee_id INTEGER,
  skill_id INTEGER,
  FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
  FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
  PRIMARY KEY (employee_id, skill_id)
);
