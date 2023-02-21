import {Member} from "./member.entity";
import {InputType, OmitType} from "@nestjs/graphql";

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


