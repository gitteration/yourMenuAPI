import {Logger, Module} from '@nestjs/common';
import { MemberService } from './member.service';
import {DatabaseModule} from "../database/database.module";
import {memberProviders} from "./member.providers";
import {MemberResolver} from "./member.resolver";

@Module({
    imports: [DatabaseModule],
    providers: [
        MemberService,
        MemberResolver,
        ...memberProviders
    ],
    controllers: [],

})
export class MemberModule {}
