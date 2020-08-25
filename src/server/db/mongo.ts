import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { MongoError } from 'mongodb';
import config from '../config';

mongoose.Promise = bluebird;

mongoose.connect(config.database, (err:MongoError) => {
  if (err) throw err;
  console.log('Mongo is connected');
});
