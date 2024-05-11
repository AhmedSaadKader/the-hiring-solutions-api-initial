import { connectionSQLResult } from './sql_query';

export type Employee = {
  employee_id?: string;
  name: string;
  email: string;
  password: string;
  resume: string;
  experience: number;
};

export class EmployeeModel {}
