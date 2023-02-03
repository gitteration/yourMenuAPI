import { Module } from '@nestjs/common';
import { RestaurantCategoryService } from './restaurant_category.service';
import { RestaurantCategoryController } from './restaurant_category.controller';
import {restaurantCategoryProviders} from "./restaurant_category.providers";
import {DatabaseModule} from "../database/database.module";

@Module({
      imports:[
          DatabaseModule
      ],
      providers: [
          ...restaurantCategoryProviders,
          RestaurantCategoryService,
      ],
      controllers: [RestaurantCategoryController]
})
export class RestaurantCategoryModule {}
