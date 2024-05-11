import { JobStatus } from './Job_status';
import { connectionSQLResult } from './sql_query';

export type Application = {
  application_id?: string;
  job_id: string;
  employee_id: string;
  status: JobStatus;
  applied_date: Date;
  reviewed_date: Date;
  notes: string;
};

export class ApplicationModel {
  async index(): Promise<Application[]> {
    try {
      const sql = 'SELECT * FROM applications';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find applications. Error: ${err}`);
    }
  }
}
