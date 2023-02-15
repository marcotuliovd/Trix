import { ResultSetHeader } from 'mysql2/promise';
import { UserReq } from '../interface/userInterface';
import connection from './connection';

export async function postUser(user: UserReq): Promise<number> {
  const SQL = `INSERT INTO Trix.users 
    (username, vocation, level, password, balance) VALUES (?,?,?,?,?)`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(SQL, [user.username, user.vocation,
    user.level, user.password, user.balance]);
  return insertId;
}

export async function getUsers() {
  return null;
}