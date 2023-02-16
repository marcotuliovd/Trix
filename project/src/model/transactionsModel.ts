import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { NewUser } from '../interface/userInterface';
import connection from './connection';

async function registry(sending: number, receiving: number, value: number) {
  const SQL = 'INSERT INTO Trix.transactions (sending, receiving, value) VALUES (?,?,?)';
  await connection.execute<ResultSetHeader>(SQL, [sending, receiving, value]);
}

async function getUser(username: string) {
  try {
    const SQL = 'Select * from Trix.users where username = (?)';
    const [[user]] = await connection
      .execute<RowDataPacket[] & NewUser[]>(SQL, [username]);
    return user;
  } catch (erro) {
    console.log(erro);
    return 'FAILURE';
  }
}

export async function deposit(username: string, money: number) {
  try {

    const user = await getUser(username);

    if (user === 'FAILURE') {
      return 'FAILURE';
    }
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
    const user = await getUser(username);
    if (user === 'FAILURE') {
      return 'FAILURE';
    }
    if (money <= user.balance) {
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

export async function sendMoney(sending: string, receiving: string, money: number) {
  try {
    const sendingAll = await getUser(sending);
    if (sendingAll === 'FAILURE') {
      return 'FAILURE';
    }
    const receivingAll = await getUser(receiving);
    if (receivingAll === 'FAILURE') {
      return 'FAILURE';
    }
    const withdrawalSending = await withdrawal(sending, money);
    if (withdrawalSending !== 'SUCESS') {
      return 'CHECK_BALANCE';
    }
    const depositReceiving = await deposit(receiving, money);
    if (depositReceiving !== 'SUCESS') {
      const depositReceiving = await deposit(receiving, money);
      return 'INCOMPLETE_SEND'
    }
    await registry(sendingAll.id, receivingAll.id, money);
    return 'SUCESS';
  } catch (erro) {
    console.log(erro);
    return 'FAILURE';
  }
}