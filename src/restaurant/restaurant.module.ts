import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {DatabaseModule} from "../database/database.module";
import {restaurantProviders} from "./restaurant.providers";
import { RestaurantController } from './restaurant.controller';
import { RestaurantResolver } from './restaurant.resolver';

@Module({
    imports: [DatabaseModule],
  providers: [
      RestaurantService,
      ...restaurantProviders,
      RestaurantResolver
  ],
  controllers: [RestaurantController]
})
export class RestaurantModule {}
