import {Args, Int, Mutation, Query, Resolver} from "@nestjs/graphql";
import { Member } from "./member.entity";
import { MemberService } from "./member.service";
import {CreateMemberDto, UpdateMemberDto} from "./member.dto";
import {Logger} from "@nestjs/common";
import {DeleteResult, UpdateResult} from "typeorm";
import {DeleteEntity} from "../entities/delete-entity";

@Resolver('Member')
export class MemberResolver {
    constructor(
        private readonly logger:Logger,
        private readonly memberService: MemberService
    ) {}

    @Query(() => Member, {name: 'getMemberById'})
    private async getById(@Args('id', {type:()=>Int}) id:number) {
        return await this.memberService.getById(id);
    }

    @Query(() => [Member], {name: 'getAllMember'})
    private async getAll() {
        return await this.memberService.getAll();
    }

    @Mutation(() => Member,{name: 'createMember'})
    private async createOne(@Args('input') createMemberDTO:CreateMemberDto):Promise<Member> {
        return await this.memberService.createOne(createMemberDTO);
    }

    @Mutation(() => Member,{name: 'updateMemberMany'})
    private async updateMany(
        @Args('id', {type:()=>Int}) id:number,
        @Args('input') updateMemberDTO:UpdateMemberDto
    ):Promise<UpdateResult> {
        return await this.memberService.updateMany(id, updateMemberDTO);
    }

    @Mutation(() => DeleteEntity, {name: 'deleteMember'})
    private async delete(@Args('id', {type:()=>Int}) id:number,):Promise<DeleteResult> {
        return await this.memberService.delete(id);
    }
}
