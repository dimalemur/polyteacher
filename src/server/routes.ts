import express from 'express';

const router = express.Router();

router
  .get('/ping', (req, res) => {
    console.log(req.headers.cookie);
    return res.json({ status: 200 });
  }); // проверка пинга

export default router;
