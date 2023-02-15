import { UserReq } from '../interface/userInterface';
import * as models from '../model/userModel';

export async function postUser(user: UserReq): Promise<number> {
  const insertId = await models.postUser(user);
  return insertId;
}

export async function getUsers() {
  return null;
}