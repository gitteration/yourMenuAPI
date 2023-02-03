import {Entity, Column, ManyToOne} from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {Restaurant} from "../restaurant/restaurant.entity";

@Entity()
export class RestaurantCategory extends BaseEntity{

    @Column({
        type: 'varchar',
        length: 50,
        comment: '카테고리명',
        nullable: false
    })
    name: string;

    @ManyToOne(() => Restaurant, (restaurant) => restaurant.restaurantCategories,{
        nullable:false
    })
    restaurant: Restaurant;


}
