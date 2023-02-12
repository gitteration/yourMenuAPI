import {Entity, JoinColumn, OneToOne} from 'typeorm';
import {Member} from "../member/member.entity";
import {Restaurant} from "../restaurant/restaurant.entity";
import {BaseEntity} from "../entities/base-entity";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class MemberSearchMeta extends BaseEntity{
    @Field(() => Member,{
        nullable: false,
        description: '맴버 객체',
        defaultValue: Member
    })
    @OneToOne(() => Member,{
        nullable:false
    })
    @JoinColumn()
    member_id: Member;

    @Field(() => Restaurant,{
        nullable: false,
        description: '음식점 객체',
        defaultValue: Restaurant
    })
    @OneToOne(() => Restaurant,{
        nullable:false
    })
    @JoinColumn()
    restaurant_id: Restaurant;

}
