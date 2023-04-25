import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@UseInterceptors(SuccessInterceptor)
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  // * Show all news
  @Get()
  getAllNews() {
    return this.newsService.getAllNews();
  }

  // * Save articles from req body
  @Post()
  createNews(@Body() createNewsDto) {
    return this.newsService.createNews(createNewsDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.newsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
  //   return this.newsService.update(+id, updateNewsDto);
  // }

  // * Delete specific article
  @Delete(':id')
  deleteNews(@Param('id') id: string) {
    return this.newsService.deleteNews(+id);
  }
}
