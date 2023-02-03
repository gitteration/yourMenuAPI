import {Entity, Column, VersionColumn, OneToMany} from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {RestaurantCategory} from "../restaurant_category/restaurant_category.entity";

@Entity()
export class Restaurant extends BaseEntity{

    @Column({
        type: 'varchar',
        length: 50,
        comment: '가계명',
        nullable: false
    })
    name: string;

    @Column({
        type: 'smallint',
        comment: '핸드폰 번호',
        nullable: false
    })
    phone_number: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '국가',
        nullable: false
    })
    country: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '도시',
        nullable: false
    })
    state: string;

    @Column({
        type: 'varchar',
        length:20,
        comment: '주소1',
        nullable: false
    })
    address1: string;

    @Column({
        type: 'varchar',
        length:20,
        comment: '주소2',
        nullable: false
    })
    address2: string;

    @Column({
        type: 'varchar',
        length:20,
        comment: '우편번호',
        nullable: false
    })
    zip_code: string;

    @Column({
        type: 'time',
        comment: '오픈 시간',
        nullable: false
    })
    open_time: Date;

    @Column({
        type: 'time',
        comment: '마감 시간',
        nullable: false
    })
    close_time: Date;

    @VersionColumn({
        default: 1,
        nullable: false,
        comment: '선택된 횟수'
    })    // 숫자 자동증가 어노테이션
    selected_number: number;

    @OneToMany(() => RestaurantCategory, (restaurantCategory) => restaurantCategory.id,{
        nullable:false
    })
    restaurantCategories: RestaurantCategory[];
}
