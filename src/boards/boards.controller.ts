import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Res,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Response } from 'express';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  // @Render('news')
  // @Get('news')
  // getNewsPage() {}

  @Get('home')
  getMainPage(@Res() res: Response) {
    return res.render('home', { layout: 'home' });
  }

  @Get('news')
  getNewsPage(@Res() res: Response) {
    return res.render('news', { layout: 'news' });
  }

  @Get('login')
  loginPage(@Res() res: Response) {
    return res.render('login', { layout: 'login' });
  }

  // @Post()
  // create(@Body() createBoardDto: CreateBoardDto) {
  //   return this.boardsService.create(createBoardDto);
  // }

  // @Get()
  // findAll() {
  //   return this.boardsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.boardsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
  //   return this.boardsService.update(+id, updateBoardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.boardsService.remove(+id);
  // }
}
