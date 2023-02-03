import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import {DatabaseModule} from "../database/database.module";
import {menuProviders} from "./menu.providers";

@Module({
    imports: [DatabaseModule],
    providers: [
        MenuService,
        ...menuProviders
    ]
})
export class MenuModule {}
