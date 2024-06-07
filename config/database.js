import { connection, connect, set } from 'mongoose';

import { MONGO_URL, MONGO_TEST_URL } from './env';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export const ConnectDB = async (dbType) => {
  set('strictQuery', true);
  return new Promise((resolve, reject) => {
    connect(dbType === 'test' ? MONGO_TEST_URL : MONGO_URL, options);
    connection.once('open', () => {
      console.log('Connected to the database');
      resolve();
    });
    connection.on('error', (err) => {
      console.log('Error connecting to the database', err);
      reject(err);
    });
  });
};
