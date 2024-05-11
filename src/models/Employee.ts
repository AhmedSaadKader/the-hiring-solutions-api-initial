import { connectionSQLResult } from './sql_query';

export type Employee = {
  employee_id?: string;
  name: string;
  email: string;
  password: string;
  resume: string;
  experience: number;
};

export class EmployeeModel {
  async index(): Promise<Employee[]> {
    try {
      const sql = 'SELECT * FROM employees';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find employees. Error: ${err}`);
    }
  }
}
