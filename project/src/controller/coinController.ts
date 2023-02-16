import { Request, Response } from 'express';
import { fetchQuotation, fetchQuotationCode } from '../gateway/fetchQuotation';
import { deposit } from '../service/transactionsService';

export async function quotation(req: Request, res: Response) {
  const data = await fetchQuotation();
  return res.status(200).json(data);
}

export async function quotationCode(req: Request, res: Response) {
  const { code } = req.params;
  console.log(code);
  const data = await fetchQuotationCode(code);

  // await setRedis(`user-${code}`, JSON.stringify(data));

  return res.status(200).json(data);
}

export async function sellCoin(req: Request, res: Response) {
  const { money, username, code } = req.body;

  // const quotationRedis = await getRedis(`code-${code}`) as string;
  // let data = JSON.parse(quotationRedis);  
  // if (!quotationRedis) {
  const [data] = await fetchQuotationCode(code);
  // }
  const quotationNumber = Number(data.high);
  const value = quotationNumber * money;
  const result = await deposit(username, value);
  if (result === 'SUCESS') {
    return res.status(200).json({ message: 'compra feita com sucesso' });
  }
  if (result === 'FAILURE') {
    return res.status(404).json({ message: 'algo não foi encontrado, verifique seus dados' });
  }
}
