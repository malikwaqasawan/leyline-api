import express from 'express';

import user from './user';
import settlement from './user';

const router = express.Router();

router.use('/user', user);
router.use('/settlement', settlement);

export default router;
