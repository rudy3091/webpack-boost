import mysql from 'mysql2';
import db from '../config/db';

export default () => {
  const { host, user, password, port } = db;
  const conn = mysql.createConnection({ host, user, password, port });
  conn.query(`CREATE DATABASE IF NOT EXISTS ${db.database};`, (err) => {
    if (err) throw new Error(err);
  });
  conn.end();
};
