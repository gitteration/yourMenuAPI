import {CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity()
export class BaseEntity{

    @PrimaryGeneratedColumn({
        type:'bigint',
        comment:'pk_auto',
    })
    id: number;

    @Field(() => Date, {
        nullable: false,
        description: '생성일',
    })
    @Index()
    @CreateDateColumn({
        comment:'생성일',
        nullable:false
    })
    createdDate: Date;

    @Field(() => Date, {
        nullable: false,
        description: '수정일',
    })
    @UpdateDateColumn({
        comment:'수정일',
        nullable:true
    })
    updateDate: Date;
}
