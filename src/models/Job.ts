import { JobStatus } from './Job_status';
import { connectionSQLResult } from './sql_query';

export type Job = {
  job_id?: number;
  company_id: number;
  title: string;
  description: string;
  salary: number;
  location: string;
  posted_date?: Date;
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
}
