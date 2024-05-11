import { v4 as uuidv4 } from 'uuid';
import { connectionSQLResult } from './helpers/sql_query';

export type Company = {
  id: string;
  name: string;
  industry: string;
  description: string;
  email: string;
  password: string;
};

export class CompanyModel {
  async index(): Promise<Company[]> {
    try {
      const sql = 'SELECT * FROM companies';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find companies. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Company> {
    try {
      const sql = 'SELECT * FROM companies WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find company ${id}. Error: ${err}`);
    }
  }

  async create(company: Company): Promise<Company> {
    const {
      id = uuidv4(),
      name,
      industry,
      description,
      email,
      password
    } = company;
    try {
      const sql =
        'INSERT INTO companies (id, name, industry, description, email, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      const result = await connectionSQLResult(sql, [
        id,
        name,
        industry,
        description,
        email,
        password
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create company ${name}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<undefined> {
    try {
      const sql = 'DELETE FROM companies WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete company ${id}. Error: ${err}`);
    }
  }

  async update(
    id: string,
    name: string,
    industry: string,
    description: string,
    email: string,
    password: string
  ): Promise<Company> {
    try {
      const sql =
        'UPDATE companies SET name=($1), industry=($2), description=($3), email=($4), password=($5) WHERE id=($6) RETURNING *';
      const result = await connectionSQLResult(sql, [
        name,
        industry,
        description,
        email,
        password,
        id
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not update company ${id}. Error: ${err}`);
    }
  }
}
