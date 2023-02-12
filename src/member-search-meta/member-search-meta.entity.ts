import {Entity, JoinColumn, OneToOne} from 'typeorm';
import {Member} from "../member/member.entity";
import {Restaurant} from "../restaurant/restaurant.entity";
import {BaseEntity} from "../entities/base-entity";

@Entity()
export class MemberSearchMeta extends BaseEntity{

    @OneToOne(() => Member,{
        nullable:false
    })
    @JoinColumn()
    member_id: Member;

    @OneToOne(() => Restaurant,{
        nullable:false
    })
    @JoinColumn()
    restaurant_id: Restaurant;

}
