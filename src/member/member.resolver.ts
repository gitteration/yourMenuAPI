import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import { Member } from "./member.entity";
import { MemberService } from "./member.service";
import {CreateMemberDTO} from "./dto/createMemberDTO";
import {Logger} from "@nestjs/common";

@Resolver('Member')
export class MemberResolver {
    constructor(
        private readonly logger:Logger,
        private readonly memberService: MemberService
    ) {}

    @Query(() => [Member], {
        name: 'getAllMember'
    })
    async getAll() {
        return await this.memberService.getAll();
    }

    @Mutation(() => Member,{
        name: 'createMember'
    })
    async create(@Args('input') createMember:CreateMemberDTO) {
        return await this.memberService.create(createMember);
    }

}
