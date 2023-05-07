import { Request, Response } from 'express';
import passengerService from '../services/passenger.service';

class PassengerController {
  async ping(req: Request, res: Response) {
    const result = await passengerService.ping();
    return res.status(200).json(result);
  }
}

export default new PassengerController();
