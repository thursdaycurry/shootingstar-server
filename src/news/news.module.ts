// src/news/news.module.ts
import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './entities/news.entity';

@Module({
  imports: [
    // HttpModule is for axios to request to python server
    HttpModule.register({
      timeout: 120000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forFeature([News]),
  ],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
