import { v4 as uuidv4 } from 'uuid';
import { connectionSQLResult } from './helpers/sql_query';

export type Skill = {
  id: string;
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

  async show(id: string): Promise<Skill> {
    try {
      const sql = 'SELECT * FROM skills WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find skill ${id}. Error: ${err}`);
    }
  }

  async create(skill: Skill): Promise<Skill> {
    const { id = uuidv4(), name } = skill;
    try {
      const sql = 'INSERT INTO skills (id, name) VALUES ($1, $2) RETURNING *';
      const result = await connectionSQLResult(sql, [id, name]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create skill ${name}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<undefined> {
    try {
      const sql = 'DELETE FROM skills WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete skill ${id}. Error: ${err}`);
    }
  }

  async update(id: string, name: string): Promise<Skill> {
    try {
      const sql = 'UPDATE skills SET name=($1) WHERE id=($2) RETURNING *';
      const result = await connectionSQLResult(sql, [name, id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not update skill ${id}. Error: ${err}`);
    }
  }
}
