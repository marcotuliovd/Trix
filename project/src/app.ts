import express from 'express';
import userRouter from './routes/userRouter';
import loginRouter from './routes/loginRouter';
import transactionsRouter from './routes/transactionsRouter';
import coinRouter from './routes/coinRouter';
import swaggerDocs from '../swagger.json';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/transactions', transactionsRouter);
app.use('/coin', coinRouter);

export default app;
