export interface UserReq {
  username: string,
  vocation: string,
  level: number,
  balance: number,
}

export interface NewUser extends UserReq {
  password: string,
  id: number,
}

export interface FoundUser extends UserReq {
  password: string,
  id?: number;
}

export interface UserTransactions {
  payload: {
    username: string
  },
  iat: number,
  exp: number,
}