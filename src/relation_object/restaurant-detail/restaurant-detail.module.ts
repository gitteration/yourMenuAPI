import { Module } from '@nestjs/common';
import { RestaurantDetailService } from './restaurant-detail.service';
import { RestaurantDetailController } from './restaurant-detail.controller';

@Module({
  providers: [RestaurantDetailService],
  controllers: [RestaurantDetailController]
})
export class RestaurantDetailModule {}
