import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import {DatabaseModule} from "../database/database.module";
import {memberProviders} from "./member.providers";
import { MemberController } from './member.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
        MemberService,
        ...memberProviders
    ],
    controllers: [MemberController],

})
export class MemberModule {}
