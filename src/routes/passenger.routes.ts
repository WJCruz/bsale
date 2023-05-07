import { Router } from 'express';
import passengerController from '../controllers/passenger.controller';

const router = Router();

router.get('/ping', passengerController.ping);

export default router;
