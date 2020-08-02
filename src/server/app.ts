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
const staticWay = path.resolve(`${__dirname}../../public/build/`);

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
  .use('/', staticHandler)
  .use('/api', apiRouter);

app.listen(config.port, () => {
  console.log(`Server is started in http://127.0.0.1:${config.port}/`);
});
