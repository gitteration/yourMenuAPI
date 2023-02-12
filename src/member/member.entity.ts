import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../entities/base-entity";
import {Field, Float, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Member extends BaseEntity{
    @Field(() => String)
    @Column({
        type: 'varchar',
        length: 20,
        comment: '날씨',
        nullable: false,
    })
    weather: string;

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
    gender: string;

    @Field(() => Number)
    @Column({
        type: 'varchar',
        length: 20,
        comment: '핸드폰 번호',
        nullable: false,
    })
    phone_number: number;


}
