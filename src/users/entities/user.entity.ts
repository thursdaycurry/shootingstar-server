import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * For using class-validator, check here
 * https://docs.nestjs.com/techniques/validation
 *
 * Before using, install this
 * $ npm i --save class-validator class-transformer
 */

@Entity('User')
export class User extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  username: string;

  @Column({ select: false })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column({ nullable: true })
  @IsString()
  imgUrl: string;
}
