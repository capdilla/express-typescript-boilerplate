require('dotenv').config();
import 'reflect-metadata';
import express, { Response as ExResponse, Request as ExRequest } from 'express';
import bodyParser from 'body-parser';

import swaggerUi from 'swagger-ui-express';

import { RegisterRoutes } from './src/routes';
import errorHandler from './src/middlewares/errorHandler.middleware';
import {
  logRequest,
  registerLogger,
} from './src/middlewares/logger.middleware';

const app: express.Application = express();

const PORT = process.env.PORT || 4000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('./src/swagger.json')));
});

app.use(logRequest);

app.use(registerLogger);

RegisterRoutes(app);

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`🚀 started http://localhost:${PORT}`);
});

export default server;
