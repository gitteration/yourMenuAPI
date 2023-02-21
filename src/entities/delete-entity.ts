import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType('DeleteEntity')
//TODO: 삭제 엔티티를 만드는게 맞을까?? 후에 리펙토링하면서 생각해보자
export class DeleteEntity{
    @Field(()=>[String])
    raw:any
    @Field(()=>Int)
    affected?:number
}
