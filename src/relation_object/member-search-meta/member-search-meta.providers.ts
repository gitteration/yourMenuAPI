import { DataSource } from 'typeorm';
import { MemberSearchMeta } from './member-search-meta.entity';

export const memberSearchMetaProviders = [
    {
        provide: 'MEMBERSEARCHMETA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(MemberSearchMeta),
        inject: ['DATA_SOURCE'],
    },
];
