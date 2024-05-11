CREATE TABLE "companies" (
  "company_id" integer PRIMARY KEY,
  "name" varchar NOT NULL,
  "industry" varchar,
  "description" varchar,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  CONSTRAINT valid_email_format CHECK (email ~* '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
);
