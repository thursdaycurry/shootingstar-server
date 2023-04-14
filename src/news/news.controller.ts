import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('/page')
  @Render('main')
  async root() {
    const news = await this.newsService.getAllNews();

    return { message: news };
  }

  @Get()
  getAllNews() {
    return this.newsService.getAllNews();
  }

  // @Get('/log')
  // doLog() {
  //   return 'hello logged...';
  // }

  // @Get('/fake')
  // getFakeApi() {
  //   return [
  //     { id: 1, name: 'John' },
  //     { id: 2, name: 'Sujan' },
  //     { id: 3, name: 'Rohan ' },
  //   ];
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.newsService.findOne(+id);
  // }

  // @Post()
  // create(@Body() createNewsDto: CreateNewsDto) {
  //   return this.newsService.create(createNewsDto);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
  //   return this.newsService.update(+id, updateNewsDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.newsService.remove(+id);
  // }
}
