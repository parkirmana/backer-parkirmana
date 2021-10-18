import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { users } from '../users/user.entity';

@Entity()
export class user_vehicles {
  @PrimaryGeneratedColumn()
  id_vehicle: number;

  @Column()
  plat_number: string;

  @Column()
  vehicle_type: string;

  @Column()
  last_parking: string;

  @Column()
  id_user: number;

  @ManyToOne((_type) => users)
  @JoinColumn({ name: 'id_user' })
  users: users[];
}
