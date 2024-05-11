import { connectionSQLResult } from './sql_query';

export type JobRequirement = {
  skill_id?: string;
  job_id: string;
};

export class JobRequirementModel {
  async index(): Promise<JobRequirement[]> {
    try {
      const sql = 'SELECT * FROM job_requirements';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find job_requirements. Error: ${err}`);
    }
  }
}
