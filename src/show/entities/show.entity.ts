import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryRole } from '../roles/category-role';
import { Schedule } from './schedule.entity';

@Entity({
  name: 'shows',
})
export class Show {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: CategoryRole })
  category: CategoryRole;

  @Column()
  place: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  thumbnail: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Schedule, (schedule) => schedule.show)
  schedules: Schedule[];
}
