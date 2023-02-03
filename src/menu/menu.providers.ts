import { DataSource } from 'typeorm';
import { Menu } from './menu.entity';

export const menuProviders = [
    {
        provide: 'MENU_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Menu),
        inject: ['DATA_SOURCE'],
    },
];
