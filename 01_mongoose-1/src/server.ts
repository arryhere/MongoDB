import express from 'express';
import cors from 'cors';
import { mongodb } from './db/mongodb.js';
import { config } from './config/config.js';

const app = express();
const host = config.server.host;
const port = config.server.port;

async function server() {
  try {
    await mongodb();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.get('/test', (req, res) => res.status(200).json({ code: 200, message: 'test' }));

    app.use((req, res, next) => res.status(404).json({ code: 404, message: 'Page Not Found' }));

    app.listen(port, () => {
      console.log('server: http://localhost:3001');
    });
  } catch (error) {
    console.log('server: error');
  }
}

void server();
