import { Module } from '@nestjs/common';
import { MemberSearchMetaService } from './member-search-meta.service';
import {DatabaseModule} from "../../database/database.module";
import {memberSearchMetaProviders} from "./member-search-meta.providers";
import { MemberSearchMetaController } from './member-search-meta.controller';

@Module({
    imports: [DatabaseModule],
  providers: [
      MemberSearchMetaService,
      ...memberSearchMetaProviders
  ],
  controllers: [MemberSearchMetaController]
})
export class MemberSearchMetaModule {}
