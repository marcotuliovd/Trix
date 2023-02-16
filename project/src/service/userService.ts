import * as bcrypt from 'bcryptjs';
import { FoundUser } from '../interface/userInterface';
import * as models from '../model/userModel';

export async function postUser(user: FoundUser): Promise<number> {
  const insertId = await models.postUser(user);
  return insertId;
}

export async function login(username: string, password: string) {
  const userPassword: string = await models.login(username);
  const checkPassword = await bcrypt.compare(password, userPassword);
  if (checkPassword === false) {
    return 'USER_INVALID';
  }
  return 'USER_VALID';
}
