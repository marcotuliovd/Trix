import express from 'express';
import userRouter from './routes/userRouter';
import loginRouter from './routes/loginRouter';
import transactionsRouter from './routes/transactionsRouter';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/transactions', transactionsRouter);

export default app;
