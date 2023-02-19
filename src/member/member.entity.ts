import {Entity, Column} from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {ArgsType, Field, Float, InputType, ObjectType} from "@nestjs/graphql";
import {IsEmpty, IsNotEmpty, Length, ValidateNested} from "class-validator";


export enum WEATHER {
    HOT = 'hot',        // 더운 날
    COLD = 'cold',      // 추운 날
    SUNNY = 'sunny',    // 화창한 날
    CLEAR = 'clear',    // 청명한 날
    DRY = 'dry',        // 건조한 날
    FOGGY = 'foggy',    // 안개낀 날
    RAINY = 'rainy',    // 비오는 날
    THUNDER = 'thunder' // 번개치는 날
}
export enum GENDER {
    M = 'M',    // 남자
    W = 'W',    // 여자
    N = 'N'     // 남자도 여자도 아닌 충성충성!
}

@ObjectType()
@Entity()
export class Member extends BaseEntity{

    @Column({
        type: 'varchar',
        length: 20,
        comment: `날씨`,
        nullable: false,
    })
    @Field(() => String, {
        nullable: false,
        description: '날씨',
        defaultValue: WEATHER.FOGGY
    })
    @Length(1,20,{
        message: 'Weather is not validate length(1-20)'
    })
    @IsNotEmpty({
        message: 'Weather is not empty'
    })
    @ValidateNested({
        message: `Weather is not validate (${WEATHER})`
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
    @Length(1,2,{
        message: 'feeling is not validate length(0~10)'
    })
    @IsEmpty({
        message: 'feeling is not empty'
    })
    feeling: number;

    @Field(() => String,{
        nullable: false,
        description: '성별',
        defaultValue: 'M'
    })
    @Column({
        type: 'char',
        length: 1,
        comment: '성별(W,M,N)',
        nullable: false,
    })
    @Length(1,1,{
        message: 'gender is not validate length(1)'
    })
    @IsEmpty({
        message: 'gender is not empty'
    })
    @ValidateNested({
        message: `Gender is not validate (${GENDER})`
    })
    gender: GENDER;

    @Field(() => String,{
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
    @Length(1,20,{
        message: 'phone_number is not validate length(1-20)'
    })
    @IsEmpty({
        message: 'phone_number is not empty'
    })
    phone_number: string;

}
