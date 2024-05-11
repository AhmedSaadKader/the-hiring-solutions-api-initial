import { connectionSQLResult } from './sql_query';

export type Recruiter = {
  recruiter_id?: string;
  name: string;
  email: string;
  password: string;
};

export class RecruiterModel {
  async index(): Promise<Recruiter[]> {
    try {
      const sql = 'SELECT * FROM recruiters';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find recruiters. Error: ${err}`);
    }
  }
}
