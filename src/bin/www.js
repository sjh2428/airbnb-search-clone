import path from 'path';
import app from '../app';
import dbSync from './dbSync';
import init from '../database/init';

dbSync({ force: false }).then(() => {
  app.listen(3000, () => {
    // init(path.join(__dirname, '../', 'database', 'listings.csv'));
    console.log('Server start');
  });
});
