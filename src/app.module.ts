import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MemberModule } from './member/member.module';
import { MenuModule } from './menu/menu.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [UserModule, MemberModule, MenuModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
