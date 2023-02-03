import {Entity, JoinColumn, OneToOne} from 'typeorm';
import {Member} from "../../member/member.entity";
import {Restaurant} from "../../restaurant/restaurant.entity";
import {Menu} from "../../menu/menu.entity";
import {BaseEntity} from "../../entities/base-entity";

@Entity()
export class MemberSearchMeta extends BaseEntity{

    @OneToOne(() => Member,{
        nullable:false
    })
    @JoinColumn()
    member_id: number;

    @OneToOne(() => Restaurant,{
        nullable:false
    })
    @JoinColumn()
    restaurant_id: number;

    @OneToOne(() => Menu, {
        nullable:false
    })
    @JoinColumn()
    menu_id: number;
}
