import {Entity, Column, VersionColumn, OneToMany} from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {RestaurantCategory} from "../restaurant-category/restaurant-category.entity";
import {Menu} from "../menu/menu.entity";
import {Field, Int, ObjectType} from "@nestjs/graphql";


enum ADDRESSTYPE {
    LOCAL = 'local',    // 지번
    ROAD = 'road'       // 도로명
}
@ObjectType()
@Entity()
export class Restaurant extends BaseEntity{
    @Field(() => String, {
        nullable: false,
        description: '가계명',
        defaultValue: '백암순대'
    })
    @Column({
        type: 'varchar',
        length: 50,
        comment: '가계명',
        nullable: false
    })
    name: string;

    @Field(() => Int,{
        nullable: false,
        description: '핸드폰 번호("-" 제외)',
        defaultValue: '021235432'
    })
    @Column({
        type: 'smallint',
        comment: '핸드폰 번호("-" 제외)',
        nullable: false,
        unique: true
    })
    phone_number: number;

    @Field(() => String,{
        nullable: false,
        description: '국가',
        defaultValue: 'republicOfKorea'
    })
    @Column({
        type: 'varchar',
        length: 20,
        comment: '국가',
        nullable: false
    })
    country: string;

    @Field(() => String,{
        nullable: false,
        description: '도시(시)',
        defaultValue: 'Seoul or 서울'
    })
    @Column({
        type: 'varchar',
        length: 20,
        comment: '도시(시)',
        nullable: false
    })
    city: string;

    @Field(() => String,{
        nullable: false,
        description: '지역(구)',
        defaultValue: 'Yeongdeungpo-gu or 영등포구'
    })
    @Column({
        type: 'varchar',
        length: 20,
        comment: '지역(구)',
        nullable: false
    })
    state: string;

    @Field(() => String,{
        nullable: false,
        description: '주소1(도로명 or 지번)',
        defaultValue: '32, 63-ro / 여의도동 61-4 '
    })
    @Column({
        type: 'varchar',
        length:30,
        comment: '주소1(도로명 or 지번)',
        nullable: false
    })
    address1: string;

    @Field(() => String,{
        nullable: false,
        description: '주소2(동, 호, 건물명)',
        defaultValue: '101동 101호 콤비빌딩'
    })
    @Column({
        type: 'varchar',
        length:50,
        comment: '주소2(동, 호, 건물명)',
        nullable: false
    })
    address2: string;

    @Field(() => String,{
        nullable: false,
        description: '우편번호',
        defaultValue: '07345'
    })
    @Column({
        type: 'varchar',
        length:20,
        comment: '우편번호',
        nullable: false
    })
    zip_code: string;

    @Field(() => String,{
        nullable: false,
        description: '주소 타입',
        defaultValue: '지번'
    })
    @Column({
        type: 'varchar',
        length:20,
        comment: '주소 타입',
        nullable: false
    })
    address_type: ADDRESSTYPE;


    @Field(() => Date,{
        nullable: true,
        description: '오픈 시간',
        defaultValue: '12:00'
    })
    @Column({
        type: 'time',
        comment: '오픈 시간',
        nullable: true
    })
    open_time: Date;

    @Field(() => Date,{
        nullable: true,
        description: '마감 시간',
        defaultValue: '24:00'
    })
    @Column({
        type: 'time',
        comment: '마감 시간',
        nullable: true
    })
    close_time: Date;

    @Field(() => Int,{
        nullable: false,
        description: '유저가 선택한 횟수',
        defaultValue: 1
    })
    @VersionColumn({
        default: 1,
        nullable: false,
        comment: '유저가 선택한 횟수'
    })    // 숫자 자동증가 어노테이션
    selected_number: number;

    @Field(() => [Menu],{
        nullable: false,
        description: '메뉴 객체 []',
        defaultValue: [Menu]
    })
    @OneToMany(() => Menu, (menu) => menu.restaurant)
    menu: Menu[];

    @Field(() => [RestaurantCategory],{
        nullable: false,
        description: '음식 카테고리 객체 []',
        defaultValue: [RestaurantCategory]
    })
    @OneToMany(() => RestaurantCategory, (restaurantCategory) => restaurantCategory.restaurant)
    restaurantCategories: RestaurantCategory[];

}
