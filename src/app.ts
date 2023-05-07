import express from 'express';
import passengerRoutes from './routes/passenger.routes';

const app = express();

app.use(express.json());
app.use('/api', passengerRoutes);


export default app;
