import { v4 as uuidv4 } from 'uuid';
import { connectionSQLResult } from './helpers/sql_query';

export type Employee = {
  id: string;
  name: string;
  email: string;
  password: string;
  resume: string;
  experience: number;
};

export class EmployeeModel {
  async index(): Promise<Employee[]> {
    try {
      const sql = 'SELECT * FROM employees';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find employees. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Employee> {
    try {
      const sql = 'SELECT * FROM employees WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find employee ${id}. Error: ${err}`);
    }
  }

  async create(employee: Employee): Promise<Employee> {
    const {
      id = uuidv4(),
      name,
      email,
      password,
      resume,
      experience
    } = employee;
    try {
      const sql =
        'INSERT INTO employees (id, name, email, password, resume, experience) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      const result = await connectionSQLResult(sql, [
        id,
        name,
        email,
        password,
        resume,
        experience
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create employee ${name}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<undefined> {
    try {
      const sql = 'DELETE FROM employees WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete employee ${id}. Error: ${err}`);
    }
  }

  async update(
    id: string,
    name: string,
    email: string,
    password: string,
    resume: string,
    experience: number
  ): Promise<Employee> {
    try {
      const sql =
        'UPDATE employees SET name=($1), email=($2), password=($3), resume=($4), experience=($5) WHERE id=($6) RETURNING *';
      const result = await connectionSQLResult(sql, [
        name,
        email,
        password,
        resume,
        experience,
        id
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not update employee ${id}. Error: ${err}`);
    }
  }
}
