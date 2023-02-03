import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {DatabaseModule} from "../database/database.module";
import {restaurantProviders} from "./restaurant.providers";
import { RestaurantController } from './restaurant.controller';

@Module({
    imports: [DatabaseModule],
  providers: [
      RestaurantService,
      ...restaurantProviders
  ],
  controllers: [RestaurantController]
})
export class RestaurantModule {}
