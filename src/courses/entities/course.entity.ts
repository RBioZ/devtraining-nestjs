import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable({
    name: 'courses_tags',
  })
  @ManyToMany(() => Tag, (tag: Tag) => tag.courses, {
    cascade: true,
  })
  tags: Tag[];
}
