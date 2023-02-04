import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { MenuModule } from './menu/menu.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RestaurantCategoryModule } from './restaurant-category/restaurant-category.module';
import {AppController} from "./app.controller";
import {AppService} from "./app.service";

@Module({
    imports: [
        ConfigModule.forRoot({
            // 전역적으로 사용여부
            // isGlobal: true,
            /** 환경 변수 파일이 여러 파일인 경우 첫 번째 인덱스(파일)를 우선으로 합니다.
            *  로컬에서는 .env.dev.local 파일로 작업, 개발서버에서는 .env.dev 파일로 작업, 운영서버에서는 .env.prod 파일로 작업
            */
            envFilePath: ['.env.local', '.env.dev', '.env.prod'],
        }),
        MemberModule,
        MenuModule,
        RestaurantModule,
        DatabaseModule,
        RestaurantCategoryModule,
    ],
  controllers: [
      AppController,
  ],
  providers: [
      AppService,
  ],
})
export class AppModule {}
