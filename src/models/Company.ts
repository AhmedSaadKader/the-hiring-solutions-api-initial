import { connectionSQLResult } from './sql_query';

export type Company = {
  company_id?: string;
  name: string;
  industry: string;
  description: string;
  email: string;
  password: string;
};

export class CompanyModel {
  async index(): Promise<Company[]> {
    try {
      const sql = 'SELECT * FROM companies';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find companies. Error: ${err}`);
    }
  }
}
