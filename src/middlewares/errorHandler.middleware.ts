import { Response, NextFunction } from 'express';
import { logError } from '../helpers/logger';
import ExpressRequest from '../interfaces/ExpressRequest';

export default function errorHandler(
  err: any,
  req: ExpressRequest | any,
  res: Response,
  next: NextFunction
): Response | void {
  logError(req, err);
  if (err instanceof TypeError) {
    return res.status(500).send({ code: 500, message: err.message });
  }

  const code = err.code || err.status;
  if ('status' in err) {
    delete err.status;
  }

  if (!('code' in err)) {
    err.code = code;
  }

  return res.status(code).send(err);
}
