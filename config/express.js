import express from 'express';

import ApplyMiddlewares from '../middlewares';
import router from '../routes';

import { PORT, TEST_PORT } from './env';

const app = express();
ApplyMiddlewares(app);

app.use('/api/v1', router);

export const StartServer = (serverType) => {
  const port = serverType === 'test' ? TEST_PORT : PORT;
  app.listen({ port }, () => {
    console.log(`app listening on port ${port}!`);
  });
};

export default app;
