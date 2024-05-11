CREATE TABLE job_requirements (
  job_id INTEGER,
  skill_id INTEGER,
  FOREIGN KEY (job_id) REFERENCES jobs(job_id),
  FOREIGN KEY (skill_id) REFERENCES skills(skill_id),
  PRIMARY KEY (job_id, skill_id)
);