// src/news/entities/news.entity.ts
import { CommonEntity } from 'src/common/entities/common.entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('News')
export class News extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resource: string;

  @Column({ nullable: true })
  section: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  url: string;
}
