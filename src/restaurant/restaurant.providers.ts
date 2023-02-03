import { DataSource } from 'typeorm';
import { Restaurant } from './restaurant.entity';

export const restaurantProviders = [
    {
        provide: 'RESTAURANT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Restaurant),
        inject: ['DATA_SOURCE'],
    },
];
