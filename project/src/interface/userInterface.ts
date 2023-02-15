export interface UserReq {
  id?: number;
  username: string,
  vocation: string,
  level: number,
  balance: number,
}

export interface NewUser extends UserReq {
  password: string,
}

export interface FoundUser extends UserReq {
  password: string,
}