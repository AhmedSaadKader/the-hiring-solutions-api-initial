import { connectionSQLResult } from './sql_query';

export type Company = {
  company_id?: string;
  name: string;
  industry: string;
  description: string;
  email: string;
  password: string;
};

export class CompanyModel {}
