import {Entity, OneToOne, JoinColumn} from 'typeorm';
import {BaseEntity} from "../../entities/base-entity";
import {Menu} from "../../menu/menu.entity";

@Entity()
export class RestaurantDatail extends BaseEntity{

    @OneToOne(() => Menu, {
        nullable:false
    })
    @JoinColumn()
    restaurant: number;

}
