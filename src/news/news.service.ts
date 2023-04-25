import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { HttpService } from '@nestjs/axios';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    // constructor injection for axios request
    private readonly httpService: HttpService,
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {}

  async getAllNews() {
    const articles = await this.newsRepository.find();
    return articles;
  }

  // * Insert multiple News into DB
  async createNews(articles) {
    // variables
    const { resource, data } = articles;

    // create news array for bulk insert
    const articlesToSave = JSON.parse(data).map((el) => {
      return { resource: resource, title: el[0] };
    });

    // Save articles to DB
    const result = await this.newsRepository
      .createQueryBuilder()
      .insert()
      .into(News)
      .values(articlesToSave)
      .execute();

    console.log(result);
  }

  // delete
  async deleteNews(id: number) {
    const result = await this.newsRepository
      .createQueryBuilder()
      .delete()
      .from(News)
      .where('id = :id', { id: id })
      .execute();

    console.log(`article no.${result} is deleted..`);
  }
}
