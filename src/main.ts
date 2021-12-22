import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { CurrencyConverterModule } from './currency-converter.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as pack from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(CurrencyConverterModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle(pack.name)
    .setDescription(pack.description)
    .setVersion(pack.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
