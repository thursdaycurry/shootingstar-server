import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
