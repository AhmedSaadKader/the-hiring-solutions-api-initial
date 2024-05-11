import { JobStatus } from './Job_status';
import { connectionSQLResult } from './helpers/sql_query';

export type Job = {
  id: number;
  company_id: number;
  title: string;
  description: string;
  salary: number;
  location: string;
  posted_date: Date;
  status: JobStatus;
};

export class JobModel {
  async index(): Promise<Job[]> {
    try {
      const sql = 'SELECT * FROM jobs';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find jobs. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Job> {
    try {
      const sql = 'SELECT * FROM jobs WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find job ${id}. Error: ${err}`);
    }
  }

  async create(job: Job): Promise<Job> {
    const {
      id,
      company_id,
      title,
      description,
      salary,
      location,
      posted_date,
      status
    } = job;
    try {
      const sql =
        'INSERT INTO jobs (id, company_id, title, description, salary, location, posted_date, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
      const result = await connectionSQLResult(sql, [
        id,
        company_id,
        title,
        description,
        salary,
        location,
        posted_date,
        status
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create job ${name}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<undefined> {
    try {
      const sql = 'DELETE FROM jobs WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete job ${id}. Error: ${err}`);
    }
  }

  async update(
    id: string,
    company_id: string,
    title: string,
    description: string,
    salary: number,
    location: string,
    posted_date: Date,
    status: JobStatus
  ): Promise<Job> {
    try {
      const sql =
        'UPDATE jobs SET company_id=($1), title=($2), description=($3), salary=($4), location=($5), posted_date=($6), status=($7) WHERE id=($8) RETURNING *';
      const result = await connectionSQLResult(sql, [
        company_id,
        title,
        description,
        salary,
        location,
        posted_date,
        status,
        id
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not update job ${id}. Error: ${err}`);
    }
  }
}
