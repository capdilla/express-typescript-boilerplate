import { Request } from 'express';
import Roles from '../enums/Roles';
import SecurityNames from '../enums/SecurityNames';
import { decode } from '../helpers/jwt.helper';
import LogedUser from '../interfaces/LoggedUser';
import { ErrorResponse } from '../interfaces/Response';
import { TokenPayload } from '../services/auth.service';

export async function expressAuthentication(
  request: Request,
  securityName: SecurityNames | any,
  scopes?: Roles[] | any[]
): Promise<LogedUser | ErrorResponse> {
  if (securityName === SecurityNames.JWT) {
    const bearerToken = request.headers['authorization'];

    if (!bearerToken) {
      return Promise.reject({
        code: 401,
        message: 'No token found in authorization header',
      } as ErrorResponse);
    }

    const [_, token] = bearerToken.split(' ');

    try {
      const tokenDecoded = await decode<TokenPayload>(token);

      if (!tokenDecoded) {
        return Promise.reject({
          code: 401,
          message: 'No token found in authorization',
        } as ErrorResponse);
      }

      return tokenDecoded as LogedUser;
    } catch (err) {
      const error = err as Error;

      if (error.name === 'TokenExpiredError') {
        return Promise.reject({
          code: 401,
          message: 'Token Expired',
        } as ErrorResponse);
      }

      return Promise.reject({
        code: 401,
        message: error.message,
      } as ErrorResponse);
    }
  }

  return Promise.reject({
    code: 401,
    message: 'Valitaion Scope Error',
  } as ErrorResponse);
}
