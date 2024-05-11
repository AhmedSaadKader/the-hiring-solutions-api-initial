import { v4 as uuidv4 } from 'uuid';
import { connectionSQLResult } from './helpers/sql_query';

export type Recruiter = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export class RecruiterModel {
  async index(): Promise<Recruiter[]> {
    try {
      const sql = 'SELECT * FROM recruiters';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find recruiters. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Recruiter> {
    try {
      const sql = 'SELECT * FROM recruiters WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find recruiter ${id}. Error: ${err}`);
    }
  }

  async create(recruiter: Recruiter): Promise<Recruiter> {
    const { id = uuidv4(), name, email, password } = recruiter;
    try {
      const sql =
        'INSERT INTO recruiters (id, name, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
      const result = await connectionSQLResult(sql, [
        id,
        name,
        email,
        password
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create recruiter ${name}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<undefined> {
    try {
      const sql = 'DELETE FROM recruiters WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete recruiter ${id}. Error: ${err}`);
    }
  }

  async update(
    id: string,
    name: string,
    email: string,
    password: string
  ): Promise<Recruiter> {
    try {
      const sql =
        'UPDATE recruiters SET name=($1), email=($2), password=($3) WHERE id=($4) RETURNING *';
      const result = await connectionSQLResult(sql, [
        name,
        email,
        password,
        id
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not update recruiter ${id}. Error: ${err}`);
    }
  }
}
