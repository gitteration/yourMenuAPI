import { Module } from '@nestjs/common';
import { RestaurantCategoryService } from './restaurant-category.service';
import { RestaurantCategoryController } from './restaurant-category.controller';
import {restaurantCategoryProviders} from "./restaurant-category.providers";
import {DatabaseModule} from "../database/database.module";
import { RestaurantCategoryResolver } from './restaurant-category.resolver';

@Module({
      imports:[
          DatabaseModule
      ],
      providers: [
          ...restaurantCategoryProviders,
          RestaurantCategoryService,
          RestaurantCategoryResolver,
      ],
      controllers: [RestaurantCategoryController]
})
export class RestaurantCategoryModule {}
