import { connectionSQLResult } from './sql_query';

export type EmpolyeeSkill = {
  skill_id: string;
  employee_id: string;
};

export class EmployeeSkillModel {
  async index(): Promise<EmpolyeeSkill[]> {
    try {
      const sql = 'SELECT * FROM employee_skills';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find employee_skills. Error: ${err}`);
    }
  }
}
