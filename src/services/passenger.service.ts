// import { Passenger } from 'src/entities/passenger';
// import { AppDataSource } from 'src/db';

// const PassengerRepository = AppDataSource.getRepository(Passenger);

class PassengerService {
  async ping() {
    return 'ping';
  }
}

export default new PassengerService();
