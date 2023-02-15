import { FoundUser } from '../interface/userInterface';
import * as models from '../model/userModel';

export async function postUser(user: FoundUser): Promise<number> {
  const insertId = await models.postUser(user);
  return insertId;
}

export async function login(username: string, password: string) {
  const userPassword: string = await models.login(username);
  if (password === userPassword) {
    return 'USER_VALID';
  }
  return 'USER_INVALID';
}
