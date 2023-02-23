import { Module } from '@nestjs/common';
import { MemberSearchMetaService } from './member-search-meta.service';
import {DatabaseModule} from "../database/database.module";
import {memberSearchMetaProviders} from "./member-search-meta.providers";
import { MemberSearchMetaResolver } from './member-search-meta.resolver';

@Module({
    imports: [DatabaseModule],
  providers: [
      MemberSearchMetaService,
      ...memberSearchMetaProviders,
      MemberSearchMetaResolver
  ],
  controllers: []
})
export class MemberSearchMetaModule {}
