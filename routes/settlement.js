import express from 'express';

import { AddUser } from '../controllers/user';

import handleError from '../utils/handle-error';

const router = express.Router();

router.get('/notifications', async (req, res) => {
  try {

    const { name } = req.body;

    const response = await AddUser({ name });

    res.status(200).json(response);
  } catch (err) {
    handleError({
      err,
      res
    });
  }
});


export default router;
