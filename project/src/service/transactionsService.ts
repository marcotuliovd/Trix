import * as transactionsModels from '../model/transactionsModel';

export async function deposit(username: string, money: number) {
  const result = await transactionsModels.deposit(username, money);
  return result;
}

export async function withdrawal(username: string, money: number) {
  const result = await transactionsModels.withdrawal(username, money);
  return result;
}

export async function sendMoney(sending: string, receiving: string, money: number) {
  const result = await transactionsModels.sendMoney(sending, receiving, money);
  if (result === 'SUCESS') {
    return { status: 200, message: 'Trix feito' };
  }
  if (result === 'INCOMPLETE_SEND') {
    return { status: 410, message: 'Trix não foi completado' };
  }
  if (result === 'CHECK_BALANCE') {
    return { status: 400, message: 'verifique o saldo e o valor de envio' };
  }
  if (result === 'FAILURE') {
    return { status: 500, message: 'sua requisição falhou, verifique os dados e tente mais tarde' };
  }
}