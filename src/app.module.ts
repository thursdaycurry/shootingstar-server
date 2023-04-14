// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news/news.module';
// import { typeORMConfig } from './configs/typeorm.config';

console.log(__dirname);

@Module({
  imports: [
    NewsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db-shootingstar.cuvbz26g00cf.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Only for dev env
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
