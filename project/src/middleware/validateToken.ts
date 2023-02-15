import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserTransactions } from '../interface/userInterface';

const keySecret = 'paralamas do Sucesso';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'token não enviado' });
  }
  try {
    const result: JwtPayload = jwt.verify(token, keySecret) as UserTransactions;
    console.log(result);
    const { username } = result;
    req.body = {
      ...req.body,
      username,
    };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'token invalido' });
  }
};

export default validateToken;