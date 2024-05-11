import { connectionSQLResult } from './sql_query';

export type Recruiter = {
  recruiter_id?: string;
  name: string;
  email: string;
  password: string;
};

export class RecruiterModel {}
