import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {Field, Float, Int, ObjectType} from "@nestjs/graphql";


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
    M = 'M',    // 남자
    W = 'W',    // 여자
    N = 'N'     // 남자도 여자도 아닌 충성충성!
}
@ObjectType()
@Entity()
export class Member extends BaseEntity{
    @Field(() => String, {
        nullable: false,
        description: '날씨',
        defaultValue: 'sunny'
    })
    @Column({
        type: 'varchar',
        length: 20,
        comment: `날씨`,
        nullable: false,
    })
    weather: WEATHER;

    @Field(() => Float,{
        nullable: false,
        description: '감정',
        defaultValue: '5.5'
    })
    @Column({
        type: 'decimal',
        precision: 2,
        scale: 1,
        default: 0,
        comment: '감정(숫자로 표현)',
        nullable: false,
    })
    feeling: number;

    @Field(() => String,{
        nullable: false,
        description: '성별',
        defaultValue: 'M'
    })
    @Column({
        type: 'char',
        length: 50,
        comment: '성별(W,M,N)',
        nullable: false,
    })
    gender: GENDER;

    @Field(() => Int,{
        nullable: false,
        description: '핸드폰 번호( "-" 생략)',
        defaultValue: '01012345678'
    })
    @Column({
        type: 'varchar',
        length: 20,
        comment: '핸드폰 번호( "-" 생략)',
        nullable: false,
    })
    phone_number: number;

}
