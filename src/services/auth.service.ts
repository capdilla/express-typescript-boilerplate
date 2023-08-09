import { sign } from '../helpers/jwt.helper';
import { ErrorResponse, SuccessResponse } from '../interfaces/Response';
import Roles from '../enums/Roles';
import LoggedUser from '../interfaces/LoggedUser';

export interface LoginParams {
  username: string;
  password: string;
}

export interface TokenPayload {
  username: string;
  role: Roles;
}

interface LoginResponse extends SuccessResponse {
  data: {
    token: string;
  };
}

const login = async (
  params: LoginParams
): Promise<LoginResponse | ErrorResponse> => {
  if (params.username == 'admin' && params.password == 'admin') {
    return {
      message: 'correct',
      success: true,
      data: {
        token: sign({ username: 'admin', role: Roles.ADMIN } as TokenPayload),
      },
    };
  }

  return {
    code: 401,
    message: 'User not found',
    success: false,
  };
};

const getMe = async (user: LoggedUser): Promise<TokenPayload> => {
  //@ts-ignore
  console.log(user.username.e.e);

  return user;
};

export default {
  login,
  getMe,
};
