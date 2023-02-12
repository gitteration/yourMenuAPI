import { Query, Resolver } from "@nestjs/graphql";
import { Member } from "./member.entity";
import { MemberService } from "./member.service";

@Resolver(() => Member)
export class MemberResolver {
    constructor(private readonly memberService: MemberService) {}

    @Query(() => [Member], { name: 'members' })
    async getAllMember() {
        return await this.memberService.findAll();
    }

    // @Mutation(() => Member)
    // async createMovie(@Args('title') title: string) {
    //     return await this.memberService.create();
    // }

}
