import { Module } from '@nestjs/common';
import { MemberSearchMetaService } from './member-search-meta.service';

@Module({
  providers: [MemberSearchMetaService]
})
export class MemberSearchMetaModule {}
