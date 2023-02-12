import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {Restaurant} from "../restaurant/restaurant.entity";
import {ManyToOne} from "typeorm";
import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Menu extends BaseEntity{
    @Field(() => String,{
        nullable: false,
        description: '메뉴명',
        defaultValue: '순대국(특)'
    })
    @Column({
        type: 'varchar',
        length: 30,
        comment: '메뉴명',
        nullable: false,
    })
    name: string;

    @Field(() => String, {
        nullable: false,
        description: '메뉴 종류',
        defaultValue: '국밥'
    })
    @Column({
        type: 'varchar',
        length: 10,
        comment: '메뉴 종류',
        nullable: false,
    })
    type: string;

    @Field(() => Int, {
        nullable: false,
        description: '메뉴 가격',
        defaultValue: 10000
    })
    @Column({
        type:'smallint',
        comment: '메뉴 가격',
        nullable: false,
    })
    price: number;

    @Field(() => [Restaurant], {
        nullable: false,
        description: '음식점 객체[]',
        defaultValue: [Restaurant]
    })
    @ManyToOne(() => Restaurant, (restaurant) => restaurant.menu)
    restaurant: Restaurant[];
}
