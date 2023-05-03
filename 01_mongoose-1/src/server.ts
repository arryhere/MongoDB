import express from 'express';
import cors from 'cors';
import { mongodb } from './db/mongodb.js';
import { config } from './config/config.js';
import { AuthorRouter } from './routes/Author.js';

const app = express();
const host = config.server.host;
const port = config.server.port;

async function server() {
  try {
    /* db */
    await mongodb();

    /* middlewares */
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    /* routes */
    app.use('/author', AuthorRouter)

    /* test */
    app.get('/test', (req, res) => res.status(200).json({ code: 200, message: 'test' }));

    /* Page Not Found */
    app.use((req, res, next) => res.status(404).json({ code: 404, message: 'Page Not Found' }));

    /* server start */
    app.listen(port, () => {
      console.log(`pretaa-applewatch: 🚀 server running: ${host}:${port}`);
    });
  } catch (error: any) {
    console.log('server: ⚠️ server error');
    console.log({ error: { code: error.code, message: error.message } });
    console.log('server: 🔌 disconnecting server');
  }
}

void server();
