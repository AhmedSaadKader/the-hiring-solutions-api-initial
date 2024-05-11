import { JobStatus } from './Job_status';
import { connectionSQLResult } from './helpers/sql_query';

export type Application = {
  id: string;
  application_id: string;
  employee_id: string;
  status: JobStatus;
  applied_date: Date;
  reviewed_date: Date;
  notes: string;
};

export class ApplicationModel {
  async index(): Promise<Application[]> {
    try {
      const sql = 'SELECT * FROM applications';
      const result = await connectionSQLResult(sql, []);
      return result.rows;
    } catch (err) {
      throw new Error(`Could not find applications. Error: ${err}`);
    }
  }

  async show(id: string): Promise<Application> {
    try {
      const sql = 'SELECT * FROM applications WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find application ${id}. Error: ${err}`);
    }
  }

  async create(application: Application): Promise<Application> {
    const {
      id,
      application_id,
      employee_id,
      status,
      applied_date,
      reviewed_date,
      notes
    } = application;
    try {
      const sql =
        'INSERT INTO applications (id, application_id, employee_id, status, applied_date, reviewed_date, notes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
      const result = await connectionSQLResult(sql, [
        id,
        application_id,
        employee_id,
        status,
        applied_date,
        reviewed_date,
        notes
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not create application ${id}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<undefined> {
    try {
      const sql = 'DELETE FROM applications WHERE id=($1)';
      const result = await connectionSQLResult(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete application ${id}. Error: ${err}`);
    }
  }

  async update(
    id: string,
    application_id: string,
    employee_id: string,
    status: JobStatus,
    applied_date: Date,
    reviewed_date: Date,
    notes: string
  ): Promise<Application> {
    try {
      const sql =
        'UPDATE applications SET application_id=($1), employee_id=($2), status=($3), applied_date=($4), reviewed_date=($5), notes=($6) WHERE id=($7) RETURNING *';
      const result = await connectionSQLResult(sql, [
        application_id,
        employee_id,
        status,
        applied_date,
        reviewed_date,
        notes,
        id
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not update application ${id}. Error: ${err}`);
    }
  }
}
