import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // * 회원가입
  async signup(body: CreateUserDto) {
    const { email, username, password } = body;

    // 해당 이메일이 이미 존재하는 경우 -> 에러 발생
    const isUserExist = await this.userRepository.find({ where: { email } });
    if (isUserExist.length) {
      throw new UnauthorizedException('This email is already taken'); // 403 Error
    }

    // 가입 가능한 경우, 비밀번호 암호화한 다음 DB에 신규유저 정보 저장
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userRepository.save({
      email,
      username,
      password: hashedPassword,
    });
    return newUser;
  }

  async getAllUsers() {
    return await this.userRepository.find();
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
