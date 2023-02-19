import {Member} from "./member.entity";
import {Field, InputType, Int, ObjectType, OmitType} from "@nestjs/graphql";
import {Any, DeleteResult} from "typeorm";

@InputType('createMemberDto',{
    description:'맴버 생성 DTO'
})

export class CreateMemberDto extends OmitType(
    Member,
    ['createdDate','updateDate'],
    InputType
){}

@InputType('updateMemberDto',{
    description:'맴버 수정 DTO'
})
export class UpdateMemberDto extends OmitType(
    Member,
    ['id','createdDate','updateDate'],
    InputType
){}


