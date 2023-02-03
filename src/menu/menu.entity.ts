import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../entities/base-entity";

@Entity()
export class Menu extends BaseEntity{

    @Column({
        type: 'varchar',
        length: 30,
        comment: '메뉴명',
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 10,
        comment: '메뉴 종류',
        nullable: false,
    })
    type: string;

    @Column({
        type:'smallint',
        comment: '메뉴가격',
        nullable: false,
    })
    price: number;

}
