import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import morgan from 'morgan';
import helmet from 'helmet';
import apiRouter from './routes';
import config from './config';
import './db/mongo';

const app = express();

const rootDir = (process.env.PWD !== undefined) ? process.env.PWD : '/';
const staticWay = path.join(rootDir, '/public/build/');

const staticHandler = express.static(staticWay);

app
  .use(helmet())
  .use(morgan('tiny'))
  .use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret,
  }))
  .use(bodyParser.json())
  .use('/api', apiRouter)
  .use('/', staticHandler)
  .use('/auth', staticHandler);

app.listen(config.port, () => {
  console.log(`Server is started in http://127.0.0.1:${config.port}/`);
});
