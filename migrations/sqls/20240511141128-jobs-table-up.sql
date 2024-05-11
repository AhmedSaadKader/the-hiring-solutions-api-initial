CREATE TABLE "jobs" (
  "job_id" integer PRIMARY KEY,
  "company_id" integer REFERENCES companies(company_id),
  "title" varchar NOT NULL,
  "description" varchar,
  "requirements" INTEGER REFERENCES skills(skill_id),
  "salary" integer,
  "location" varchar,
  "posted_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "status" job_status
);
