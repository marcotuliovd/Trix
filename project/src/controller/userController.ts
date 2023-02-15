import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { FoundUser } from '../interface/userInterface';
import * as service from '../service/userService';

const keySecret = 'paralamas do Sucesso';

export async function postUser(req: Request, res: Response) {
  const user = req.body as FoundUser;
  const { username } = user;
  const insertId = await service.postUser(user);
  if (typeof insertId === 'number') {
    const token = jwt.sign(
      { payload: { username } }, 
      keySecret,
      { algorithm: 'HS256', expiresIn: '500min' },
    );
    return res.status(201).json({ token });
  }
}

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const result: string = await service.login(username, password);
  if (result === 'USER_VALID') {
    const token = jwt.sign(
      { payload: { username } }, 
      keySecret,
      { algorithm: 'HS256', expiresIn: '500min' },
    );
    return res.status(200).json({ token });
  }
  return res.status(404).json({ message: 'username não encontrado' });
}