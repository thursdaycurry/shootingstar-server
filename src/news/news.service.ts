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

  getAllNews() {
    return this.newsRepository.find();
  }

  async createNews(articles) {
    // id, resource, section, title, summary, url
    const { resource, data } = articles;

    const articlesToSave = JSON.parse(data).map((el) => {
      return {
        resource: resource,
        title: el[0],
      };
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

  // async scrape() {
  //   return await this.httpService.axiosRef.get('http://localhost:5000/scrape');
  // }

  // async scrape() {
  //   // const scrapingData = this.httpService
  //   //   .get('http://107.21.144.61:5000/scrape/nyt')
  //   //   .pipe(
  //   //     map((response: AxiosResponse<News[]>) => {
  //   //       return response.data;
  //   //     }),
  //   //   );
  //   const scrapingData = await this.httpService
  //     .get('localhost:5000/scrape')
  //     .pipe(
  //       map((response: AxiosResponse) => {
  //         return response.data;
  //       }),
  //     );
  //   return scrapingData;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} news`;
  // }

  // update(id: number, updateNewsDto: UpdateNewsDto) {
  //   return `This action updates a #${id} news`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} news`;
  // }
}
