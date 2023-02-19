import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType('DeleteEntity')
export class DeleteEntity{
    @Field(()=>[String])
    raw:any
    @Field(()=>Int)
    affected?:number
}
