'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// Constants
const {
  MONGO_HOSTNAME,
  MONGO_DATABASE_NAME
} = process.env;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${MONGO_HOSTNAME}/${MONGO_DATABASE_NAME}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World\n');
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('common'));

export default app;
