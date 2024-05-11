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

export class JobModel {}
