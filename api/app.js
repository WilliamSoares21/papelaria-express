import express from 'express';
import cors from 'cors';

import produtosRouter from './produtos.js';
import healthRouter from './health.js';

const app = express();

app.use(cors());

app.use('/produtos', produtosRouter);
app.use('/health', healthRouter);

export default app;

