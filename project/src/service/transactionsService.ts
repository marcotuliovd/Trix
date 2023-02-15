import * as transactionsModels from '../model/transactionsModel';

export async function deposit(username: string, money: number) {
  const result = await transactionsModels.deposit(username, money);
  return result;
}

export async function withdrawal(username: string, money: number) {
  const result = await transactionsModels.withdrawal(username, money);
  return result;
}