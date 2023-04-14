// src/news/entities/news.entity.ts
import { CommonEntity } from 'src/common/entities/common.entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('News')
export class NewsEntity extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resource: string;

  @Column()
  section: string;

  @Column()
  title: string;

  @Column()
  summary: string;

  @Column()
  url: string;
}
