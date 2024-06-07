import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const ApplyMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(morgan('common'));
};

export default ApplyMiddlewares;
