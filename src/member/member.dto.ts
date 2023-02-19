import {Member} from "./member.entity";
import {InputType, OmitType} from "@nestjs/graphql";

@InputType('createMemberDTO',{
    description:'맴버 생성 DTO'
})
export class CreateMemberDto extends OmitType(
    Member,
    ['createdDate','updateDate'],
    InputType
){}
