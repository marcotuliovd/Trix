import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserReq } from '../interface/userInterface';
import * as service from '../service/userService';

const keySecret = 'paralamas do Sucesso';

export async function postUser(req: Request, res: Response) {
  const user = req.body as UserReq;
  const { vocation, username, level } = user;
  const insertId = await service.postUser(user);
  if (typeof insertId === 'number') {
    const token = jwt.sign(
      { payload: { username, insertId, vocation, level } }, 
      keySecret,
      { algorithm: 'HS256', expiresIn: '500min' },
    );
    return res.status(201).json({ token });
  }
}

export async function getUsers() {
  return null;
}