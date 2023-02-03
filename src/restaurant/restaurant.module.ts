import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {DatabaseModule} from "../database/database.module";
import {restaurantProviders} from "./restaurant.providers";

@Module({
    imports: [DatabaseModule],
  providers: [
      RestaurantService,
      ...restaurantProviders
  ]
})
export class RestaurantModule {}
