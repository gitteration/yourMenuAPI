import {Entity, Column} from 'typeorm';
import {BaseEntity} from "../entities/base-entity";

@Entity()
export class RestaurantCategory extends BaseEntity{

    @Column({
        type: 'varchar',
        length: 50,
        comment: '카테고리명',
        nullable: false
    })
    name: string;




}
