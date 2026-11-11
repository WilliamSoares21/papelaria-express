import { Router } from 'express';
import { pool } from './db.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    await pool.query('SELECT 1');

    res.status(200).json({
      ok: true
    });
  } catch (error) {
    console.error('Falha no health check:', error);

    res.status(503).json({
      ok: false
    });
  }
});

export default router;

