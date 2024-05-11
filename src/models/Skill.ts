import { connectionSQLResult } from './sql_query';

export type Skill = {
  skill_id?: string;
  name: string;
};

export class SkillModel {
  async index(): Promise<Skill[]> {
    try {
      const sql = 'SELECT * FROM skills';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find skills. Error: ${err}`);
    }
  }
}
