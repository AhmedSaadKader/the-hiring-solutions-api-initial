CREATE TABLE "applications" (
  "id" integer PRIMARY KEY,
  "job_id" integer REFERENCES jobs(id),
  "employee_id" integer REFERENCES employees(id),
  "status" job_status,
  "applied_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "reviewed_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "notes" varchar
);
