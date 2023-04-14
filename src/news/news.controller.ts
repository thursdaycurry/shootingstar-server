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

  @Get()
  getAllNews() {
    return this.newsService.getAllNews();
  }

  // * Testing API: Push article into DB
  @Post()
  create(@Body() createNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  // * Scraping News
  @Get('/scrape')
  @Render('main')
  async root() {
    const news = await this.newsService.scrape();
    return { message: news };
  }

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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
  //   return this.newsService.update(+id, updateNewsDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.newsService.remove(+id);
  // }
}
