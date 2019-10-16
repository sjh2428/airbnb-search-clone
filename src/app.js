import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import route from './routes';

dotenv.config();

const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    cookie: {
      httpOnly: true,
      maxAge: 30 * 1000,
    },
  }),
);

app.set('views', path.resolve(__dirname, 'views/page'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use('/', route);

app.use((req, res, next) => {
  const error = new Error('404 PAGE NOT FOUND');
  error.status = 404;
  return next(error);
});

app.use((err, req, res) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(status).json({ message });
});

export default app;
