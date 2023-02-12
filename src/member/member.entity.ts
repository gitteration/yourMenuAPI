import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {Field, Float, ObjectType} from "@nestjs/graphql";


enum WEATHER {
    HOT = 'hot',        // 더운 날
    COLD = 'cold',      // 추운 날
    SUNNY = 'sunny',    // 화창한 날
    CLEAR = 'clear',    // 청명한 날
    DRY = 'dry',        // 건조한 날
    FOGGY = 'foggy',    // 안개낀 날
    RAINY = 'rainy',    // 비오는 날
    THUNDER = 'thunder' // 번개치는 날
}
enum GENDER {
    M = 'm',    // 남자
    W = 'w',    // 여자
    N = 'n'     // 남자도 여자도 아닌 중성
}
@ObjectType()
@Entity()
export class Member extends BaseEntity{
    @Field(() => String)
    @Column({
        type: 'varchar',
        length: 20,
        comment: `날씨`,
        nullable: false,
    })
    weather: WEATHER;

    @Field(() => Float)
    @Column({
        type: 'decimal',
        precision: 2,
        scale: 1,
        default: 0,
        comment: '감정',
        nullable: false,
    })
    feeling: number;

    @Field(() => String)
    @Column({
        type: 'char',
        length: 50,
        comment: '성별(W,M,N)',
        nullable: false,
    })
    gender: GENDER;

    @Field(() => Number)
    @Column({
        type: 'varchar',
        length: 20,
        comment: '핸드폰 번호(- 없이)',
        nullable: false,
    })
    phone_number: number;

}
