import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import morgan from 'morgan';
import helmet from 'helmet';
import apiRouter from './routes';
import config from './config';
import { checkTocken } from './middleware/checkTocker';

const app = express();

const staticWay = path.join(path.resolve(__dirname), '..', 'public', 'build');

const staticHandler = express.static(staticWay);

app
  .use(helmet())
  .use(morgan('tiny'))
  .use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret,
    name: config.SESS_NAME,
    cookie: {
      maxAge: config.SESS_LIFETIME,
      sameSite: true,
    },
  }))
  .use(bodyParser.json())
  .use('/api', apiRouter)
  .use('/', staticHandler)
  .use('/:pages', staticHandler)
  .use('/login/authhelp/', staticHandler)
  .use((req, res) => { res.send('Страница не найдена'); });

app.listen(config.port, () => {
  console.log(`Server is started in http://127.0.0.1:${config.port}/`);
});
