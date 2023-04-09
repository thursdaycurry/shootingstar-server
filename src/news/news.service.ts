import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { HttpService } from '@nestjs/axios';
import { News } from './entities/news.entity';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class NewsService {
  constructor(
    // constructor injection for axios request
    private readonly httpService: HttpService,
  ) {}

  // getAllNews(): Observable<AxiosResponse<News[]>> {
  //   return this.httpService.get('http://107.21.144.61:5000/scrape/nyt');
  // }

  getAllNews(): Observable<News[]> {
    return this.httpService.get('http://107.21.144.61:5000/scrape/nyt').pipe(
      map((response: AxiosResponse<News[]>) => {
        return response.data;
      }),
    );
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} news`;
  // }

  // create(createNewsDto: CreateNewsDto) {
  //   return 'This action adds a new news';
  // }

  // update(id: number, updateNewsDto: UpdateNewsDto) {
  //   return `This action updates a #${id} news`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} news`;
  // }
}
