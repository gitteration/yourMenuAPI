import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import {DatabaseModule} from "../database/database.module";
import {menuProviders} from "./menu.providers";
import { MenuController } from './menu.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
        MenuService,
        ...menuProviders
    ],
    controllers: [MenuController]
})
export class MenuModule {}
