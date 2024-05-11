CREATE TABLE "jobs" (
  "id" integer PRIMARY KEY,
  "company_id" integer REFERENCES companies(id),
  "title" varchar NOT NULL,
  "description" varchar,
  "requirements" INTEGER REFERENCES skills(id),
  "salary" integer,
  "location" varchar,
  "posted_date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "status" job_status
);
