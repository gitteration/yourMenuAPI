import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../entities/base-entity";

@Entity()
export class Member extends BaseEntity{

    @Column({
        type: 'varchar',
        length: 20,
        comment: '날씨',
        nullable: false,
    })
    weather: string;

    @Column({
        type: 'decimal',
        precision: 2,
        scale: 1,
        default: 0,
        comment: '감정',
        nullable: false,
    })
    feeling: number;

    @Column({
        type: 'char',
        length: 50,
        comment: '성별(W,M,N)',
        nullable: false,
    })
    gender: string;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '날씨',
        nullable: false,
    })
    phone_number: number;


}
