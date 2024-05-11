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

export class ApplicationModel {}
