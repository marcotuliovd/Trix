import { Response, Request } from 'express';
import * as transactionsService from '../service/transactionsService';

export async function deposit(req: Request, res: Response) {
  const { username, money } = req.body;
  const result = await transactionsService.deposit(username, money);
  if (result === 'SUCESS') {
    return res.status(200).json({ message: 'deposito feito com sucesso' });
  }
  if (result === 'FAILURE') {
    return res.status(404).json({ message: 'algo não foi encontrado, verifique seus dados' });
  }
}

export async function withdrawal(req: Request, res: Response) {
  const { username, money } = req.body;
  const result = await transactionsService.withdrawal(username, money);
  if (result === 'SUCESS') {
    return res.status(200).json({ message: 'saque feito com sucesso' });
  }
  if (result === 'FAILURE') {
    return res.status(404).json({ message: 'algo não foi encontrado, verifique seus dados' });
  }
  if (result === 'UNAVAILABLE_BALANCE') {
    return res.status(401).json({ message: 'o saldo não é suficiente' });
  }
}