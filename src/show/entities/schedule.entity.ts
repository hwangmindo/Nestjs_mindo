import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Show } from './show.entity';
import { Seat } from './seat.entity';
import { Book } from 'src/book/entities/book.entity';

@Entity({
  name: 'schedules',
})
export class Schedule {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unsigned: true })
  showId: number;

  @Column()
  date: Date;

  @Column({ type: 'time' })
  time: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedat: Date;

  @ManyToOne((type) => Show, (show) => show.schedules, { onDelete: 'CASCADE' })
  show: Show;

  @OneToOne((type) => Seat, (seat) => seat.schedule, { cascade: true })
  seat: Seat;
}
