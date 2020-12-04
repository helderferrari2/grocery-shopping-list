import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './src/routes';
import 'dotenv/config';

/**
 * Initial Configuration
 */
class App {
  constructor() {
    this.server = express(); // Start the server
    this.middlewares();
    this.routes();
    this.database();
  }

  middlewares() {
    this.server.use(express.json()); // Allow json input
    this.server.use(cors()); // Allow Cors
  }

  routes() {
    this.server.use('/api', routes); // Set all routes to server
  }

  database() {
    this.mongoConnection = mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new App().server;
