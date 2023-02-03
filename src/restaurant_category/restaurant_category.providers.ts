import { DataSource } from 'typeorm';
import { RestaurantCategory } from './restaurant_category.entity';

export const restaurantCategoryProviders = [
    {
        provide: 'RESTAURANTCATEGORY_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(RestaurantCategory),
        inject: ['DATA_SOURCE'],
    },
];
