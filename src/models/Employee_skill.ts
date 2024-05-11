import { connectionSQLResult } from './helpers/sql_query';

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

  async show(skill_id: string, employee_id: string): Promise<EmpolyeeSkill> {
    try {
      const sql =
        'SELECT * FROM employee_skills WHERE skill_id=($1) AND employee_id=($2)';
      const result = await connectionSQLResult(sql, [skill_id, employee_id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find employee_skill. Error: ${err}`);
    }
  }

  async create(skill_id: string, employee_id: string): Promise<EmpolyeeSkill> {
    try {
      const sql =
        'INSERT INTO employee_skills (skill_id, employee_id) VALUES ($1, $2) RETURNING *';
      const result = await connectionSQLResult(sql, [skill_id, employee_id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create employee_skill. Error: ${err}`);
    }
  }

  async delete(skill_id: string, employee_id: string): Promise<undefined> {
    try {
      const sql =
        'DELETE FROM employee_skills WHERE skill_id=($1) AND employee_id=($2)';
      const result = await connectionSQLResult(sql, [skill_id, employee_id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete employee_skill. Error: ${err}`);
    }
  }
}
