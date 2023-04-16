import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'express-handlebars';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /**
   * for applying MVC pattern
   * _dirname : current path
   */
  app.useStaticAssets(join(__dirname, '..', 'public')); // CSS, JS static files
  app.setBaseViewsDir(join(__dirname, '..', 'views/')); // HTML
  app.engine(
    'hbs',
    hbs({
      extname: 'hbs',
      defaultLayout: 'main',
      partialsDir: join(__dirname, '..', 'views/partials'),
    }),
  );
  app.setViewEngine('hbs');

  // CORS allow
  app.enableCors({
    origin: true, // 모든 url에 개방
    // credentials: true, //프론트에서 credentials 설정 true
  });

  await app.listen(3000);
}
bootstrap();
