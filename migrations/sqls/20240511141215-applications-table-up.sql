CREATE TABLE "applications" (
  "application_id" integer PRIMARY KEY,
  "job_id" integer REFERENCES jobs(job_id),
  "employee_id" integer REFERENCES employees(employee_id),
  "status" job_status,
  "applied_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "reviewed_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "notes" varchar
);
