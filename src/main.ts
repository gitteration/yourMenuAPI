import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const env = process.env;
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors();
    await app.listen(env.SERVER_PORT || 3001);

}
bootstrap();
