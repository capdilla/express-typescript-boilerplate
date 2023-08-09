import ExpressRequest from '../interfaces/ExpressRequest';

import { Response, NextFunction } from 'express';

const { v4: uuidv4 } = require('uuid');

const jwtDecode = require('jwt-decode');

const getTokenDecode = (req: ExpressRequest) => {
  if (req.headers.authorization) {
    try {
      return jwtDecode(req.headers.authorization.split('Bearer ')[1]);
    } catch (error) {
      return null;
    }
  }

  return null;
};

import { LEVELS, log, logSuccess, logError } from '../helpers/logger';

export function logRequest(
  req: ExpressRequest | any,
  res: Response,
  next: NextFunction
): void {
  const requestId = uuidv4();

  req.requestId = requestId;

  log({
    req,
    levels: LEVELS.info,
    message: 'init request',
    params: {
      requestURL: req.originalUrl,
      method: req.method,
      body: req.body,
      clientInfo: getTokenDecode(req),
    },
  });

  next();
}

//register log before send the request
export const registerLogger = (
  req: ExpressRequest | any,
  res: Response,
  next: NextFunction
): void => {
  const originalSend = res.send;

  res.send = function (arg: any) {
    const parse = () => {
      try {
        return JSON.parse(arg);
      } catch (error) {
        return null;
      }
    };

    const parseObj = parse();

    const response = parseObj ? parseObj : arg;

    if (parseObj) {
      if (response.error) {
        logError(req, response.error);
      } else {
        logSuccess(req, 'Response', {
          response,
          status: res.statusCode,
        });
      }
    }

    return originalSend.call(this, arg);
  };

  next();
};
