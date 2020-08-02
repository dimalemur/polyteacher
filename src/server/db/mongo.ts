import mongoose from 'mongoose';
import bluebird from 'bluebird';
import config from '../config';

mongoose.Promise = bluebird;
mongoose.connect(config.database, (err:string) => {
  if (err) throw err;

  console.log('Mongo is connected');
});
