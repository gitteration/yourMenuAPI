import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import {DatabaseModule} from "../database/database.module";
import {memberProviders} from "./member.providers";

@Module({
    imports: [DatabaseModule],
    providers: [
        MemberService,
        ...memberProviders
    ],

})
export class MemberModule {}
