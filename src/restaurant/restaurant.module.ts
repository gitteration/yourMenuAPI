import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {DatabaseModule} from "../database/database.module";
import {restaurantProviders} from "./restaurant.providers";
import { RestaurantResolver } from './restaurant.resolver';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        RestaurantService,
        RestaurantResolver,
        ...restaurantProviders,
    ],
    controllers: []
})
export class RestaurantModule {}
