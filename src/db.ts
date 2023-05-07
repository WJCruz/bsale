import { DataSource } from 'typeorm';
import { Passenger } from './entities/passenger';
import { BoardingPass } from './entities/boarding_pass';
import { Purchase } from './entities/purchase';
import { Flight } from './entities/flight';
import { Seat } from './entities/seat';
import { SeatType } from './entities/seat_type';
import { Airplane } from './entities/airplane';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'my_db',
    entities: [Passenger, BoardingPass, Purchase, Flight, Seat, SeatType, Airplane],
    synchronize: true
});
