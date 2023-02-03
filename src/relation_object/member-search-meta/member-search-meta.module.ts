import { Module } from '@nestjs/common';
import { MemberSearchMetaService } from './member-search-meta.service';
import {DatabaseModule} from "../../database/database.module";
import {memberSearchMetaProviders} from "./member-search-meta.providers";

@Module({
    imports: [DatabaseModule],
  providers: [
      MemberSearchMetaService,
      ...memberSearchMetaProviders
  ]
})
export class MemberSearchMetaModule {}
