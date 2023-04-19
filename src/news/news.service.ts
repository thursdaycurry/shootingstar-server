import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { HttpService } from '@nestjs/axios';
import { NewsEntity } from './entities/news.entity';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NewsService {
  constructor(
    // constructor injection for axios request
    private readonly httpService: HttpService,
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  getAllNews() {
    return this.newsRepository.find();
  }

  async scrape() {
    return await this.httpService.axiosRef.get('http://localhost:5000/scrape');
  }

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

  create(article) {
    // id, resource, section, title, summary, url
    // return this.newsRepository.save(article);
    console.log(article);
  }

  // update(id: number, updateNewsDto: UpdateNewsDto) {
  //   return `This action updates a #${id} news`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} news`;
  // }
}
