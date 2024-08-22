import {
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Schedule } from './schedule.entity';
import { seatCounts } from '../counts/seat-count';

export class Seat {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unsigned: true })
  scheduleId: number;

  @Column({ unsigned: true, default: seatCounts.DEFAULT.TOTAL_SEAT_COUNTS })
  availableSeats: number;

  @Column({ unsigned: true, default: seatCounts.DEFAULT.TOTAL_SEAT_COUNTS })
  totalSeats: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne((type) => Schedule, { onDelete: 'CASCADE' })
  @JoinColumn()
  schedule: Schedule;
}
