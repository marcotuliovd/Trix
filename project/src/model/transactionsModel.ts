import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { NewUser } from '../interface/userInterface';
import connection from './connection';

async function registry(sending: number, receiving: number, value: number) {
  const SQL = 'INSERT INTO Trix.transactions (sending, receiving, value) VALUES (?,?,?)';
  await connection.execute<ResultSetHeader>(SQL, [sending, receiving, value]);
}

export async function deposit(username: string, money: number) {
  try {
    const SQL = 'SELECT * from Trix.users where username = (?)';
    const [[user]] = await connection
      .execute<RowDataPacket[] & NewUser[]>(SQL, [username]);
    const newValue = user.balance + money;
    const SQL_UPDATE = 'UPDATE Trix.users SET balance = (?) where username = (?)';
    await connection.execute<ResultSetHeader>(SQL_UPDATE, [newValue, username]);
    await registry(user.id, user.id, money);
    return 'SUCESS';
  } catch (erro) {
    console.log(erro);
    return 'FAILURE';
  }
}

export async function withdrawal(username: string, money: number) {
  try {
    const SQL = 'Select * from Trix.users where username = (?)';
    const [[user]] = await connection
      .execute<RowDataPacket[] & NewUser[]>(SQL, [username]);
    if (money < user.balance) {
      const newValue = user.balance - money;
      const SQL_UPDATE = 'UPDATE Trix.users SET balance = (?) where username = (?)';
      await connection.execute<ResultSetHeader>(SQL_UPDATE, [newValue, username]);
      await registry(user.id, user.id, -money);
      return 'SUCESS';
    }
    return 'UNAVAILABLE_BALANCE';
  } catch (erro) {
    console.log(erro);
    return 'FAILURE';
  }
}
