import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import blogPostRoutes from './src/routes/blogPostRoutes';

// Constants
const {
  MONGO_HOSTNAME,
  MONGO_DATABASE_NAME,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = process.env;

// mongoose connection
mongoose.Promise = global.Promise;
console.log(`Connecting to: mongodb://${MONGO_HOSTNAME}/${MONGO_DATABASE_NAME} as user: ${MONGO_USERNAME}`);
mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DATABASE_NAME}?authSource=admin`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on('error', (err) => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  console.log(err);
  process.exit();
});

// App
const app = express();

app.use(cors());

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

blogPostRoutes(app);

export default app;
