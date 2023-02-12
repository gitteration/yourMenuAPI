import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import {DatabaseModule} from "../database/database.module";
import {menuProviders} from "./menu.providers";
import { MenuController } from './menu.controller';
import { MenuResolver } from './menu.resolver';

@Module({
    imports: [DatabaseModule],
    providers: [
        MenuService,
        ...menuProviders,
        MenuResolver
    ],
    controllers: [MenuController]
})
export class MenuModule {}
