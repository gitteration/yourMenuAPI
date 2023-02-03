import {CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class BaseEntity{
    @PrimaryGeneratedColumn({
        type:'bigint',
        comment:'pk_auto',
    })
    id: number;

    @Index()
    @CreateDateColumn({
        comment:'생성일',
        nullable:false
    })
    createdDate: Date;

    @UpdateDateColumn({
        comment:'수정일',
        nullable:true
    })
    updateDate: Date;
}
