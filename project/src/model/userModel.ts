import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { FoundUser, NewUser } from '../interface/userInterface';
import connection from './connection';

export async function postUser(user: FoundUser): Promise<number> {
  const SQL = `INSERT INTO Trix.users 
    (username, vocation, level, password, balance) VALUES (?,?,?,?,?)`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(SQL, [user.username, user.vocation,
    user.level, user.password, user.balance]);
  const data = await connection
    .execute<ResultSetHeader>(SQL, ['username', user.vocation,
    user.level, user.password, user.balance]);
  console.log(data);
    
  return insertId;
}

export async function login(username: string) {
  try {
    const SQL = 'Select * from Trix.users where username = (?)';
    const [[user]] = await connection
      .execute<RowDataPacket[] & NewUser[]>(SQL, [username]);

    return user.password;
  } catch (erro) {
    console.log(erro);
    return 'USER_INVALID';
  }
}

export async function getUser(username: string) {
  try {
    const SQL = 'Select * from Trix.users where username = (?)';
    const [[user]] = await connection
      .execute<RowDataPacket[] & NewUser[]>(SQL, [username]);
    if (user.username === username) {
      return 'EXIST';
    }
  } catch (erro) {
    console.log(erro);
    return 'USER_INVALID';
  }
}