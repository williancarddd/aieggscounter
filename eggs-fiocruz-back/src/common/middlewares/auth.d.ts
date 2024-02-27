interface User {
  id: number;
  f_name: string;
  l_name: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  type: string;
}

interface UserPayload {
  user: User;
  iat: number;
  exp: number;
}

declare namespace Express {
  export interface Request {
    user_payload?: UserPayload;
  }
}
