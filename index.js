import express from 'express';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import env from 'dotenv';
import {dirname} from 'path';
import router from  './routes/sales.js';
import {errorHandlerMiddleware} from './utils/error-handler.js';
const app = express()
env.config({ path: './config/config.env' });
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// file uploading
app.use(fileUpload());
// set the static folders
app.use(express.static(dirname('public')));
app.use('/sales', router);
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 8000;

const server = app.listen(
  PORT,
  console.log(
    `server running on ${process.env.NODE_ENV} listening on to the port: ${PORT}`
  )
);

// handle the unhandled rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});