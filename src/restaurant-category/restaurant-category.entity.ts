import {Entity, Column} from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {ManyToOne} from "typeorm";
import {Restaurant} from "../restaurant/restaurant.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class RestaurantCategory extends BaseEntity{

    @Field(() => String,{
        nullable: false,
        description: '음식점 카테고리명',
        defaultValue: 'koreaFood / 한식'
    })
    @Column({
        type: 'varchar',
        length: 50,
        comment: '음식점 카테고리명',
        nullable: false
    })
    name: string;

    @Field(() => Restaurant,{
        nullable: false,
        description: '음식점 객체',
        defaultValue: Restaurant
    })
    @ManyToOne(() => Restaurant, (restaurant) => restaurant.restaurantCategories)
    restaurant: Restaurant;


}
