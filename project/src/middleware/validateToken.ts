import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserTransactions } from '../interface/userInterface';

const keySecret = 'paralamas do Sucesso';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'token não enviado' });
  }
  try {
    const result = jwt.verify(token, keySecret) as UserTransactions;
    const { username } = result.payload;
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