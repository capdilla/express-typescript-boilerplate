import { createLogger, format, transports } from 'winston';

import moment from 'moment';
import ExpressRequest from '../interfaces/ExpressRequest';

const isTestRunning = typeof global.it === 'function';

export enum LEVELS {
  error = 'error',
  warn = 'warn',
  help = 'help',
  data = 'data',
  info = 'info',
  debug = 'debug',
  prompt = 'prompt',
  http = 'http',
  verbose = 'verbose',
  input = 'input',
  silly = 'silly',
}

const create = createLogger({
  format: format.combine(format.printf(info => `${info.message}`)),

  transports: [
    new transports.File({
      level: 'info',
      //512 Kbs in bites
      maxsize: 512000,
      maxFiles: 5,
      filename: `${__dirname}/../../logs/log-api.log`,
    }),
    new transports.Console({
      format: format.combine(format.colorize()),
      level: 'debug',
    }),
  ],
});

const _getQueryParams = (req: ExpressRequest) => {
  let queryParams = {};
  if (req) {
    try {
      //   for (const prop in req.swagger.params) {
      //     if (req.swagger.params.hasOwnProperty(prop)) {
      //       const element = req.swagger.params[prop].raw;
      //       queryParams[prop] = element;
      //     }
      //   }
    } catch (err) {
      console.log(`Error logging at _getQueryParams: ${err}`);
    }
  }

  return queryParams;
};

type MessageParams = string | object;

const _getParams = (params: MessageParams): string => {
  const maxLength = 250;
  let message = '';
  try {
    if (typeof params == 'string') {
      message = params;
    } else {
      message = JSON.stringify(params, null, 4);
    }

    if (message.length > maxLength) {
      message = `${message.substring(0, maxLength)}...`;
    }
  } catch (err) {
    console.log(`Error logging at _getMessage: ${err}`);
  }

  return message;
};

interface ILog {
  levels?: LEVELS;
  message: string;
  params: MessageParams;
  req: ExpressRequest;
}

export const log = ({ levels, req, message, params }: ILog) => {
  if (isTestRunning) return;

  
  const { requestId } = req;

  const obj = {
    params,
    levels: levels || 'debug',
    date: moment().format('YYYY-MM-DD-THH:mm:ss.SSS'),
    message,
    requestId,
    timestamp: new Date().getTime(),
  };

  const logLevel = create[levels || 'debug'] as any;

  if (logLevel) {
    logLevel(JSON.stringify(obj, null, 4));
  }

  console.log(
    '\n-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/-~/\n'
  );
};

export const logError = (req: ExpressRequest, err: any) => {
  try {
    log({
      req,
      levels: LEVELS.error,
      message: err ? err.description : null,
      params: {
        request_status: err ? `${err.code} - ${err.message}` : null,
        stack: err ? err.stack : null,
      },
    });
  } catch (err) {
    console.log(`Error logging error: ${err}`);
  }
};

export const logSuccess = (
  req: ExpressRequest,
  message: string,
  params: object
) => {
  try {
    log({
      req,
      message,
      params,
      levels: LEVELS.info,
    });
  } catch (err) {
    console.log(`Error logging success: ${err}`);
  }
};
