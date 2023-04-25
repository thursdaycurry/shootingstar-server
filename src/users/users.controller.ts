import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseInterceptors,
  UploadedFile,
  UseFilters,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

import { FileInterceptor } from '@nestjs/platform-express';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@UseFilters(HttpExceptionFilter)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getCurrentUser() {
    return 'currentUser';
  }

  @Post()
  async signUp(@Body() body: CreateUserDto) {
    return await this.usersService.signup(body);
  }

  @Get('all')
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }
}
