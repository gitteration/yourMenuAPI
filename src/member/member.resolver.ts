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
    async getMemberById(@Args('id', {type:()=>Int}) id:number) {
        return await this.memberService.getById(id);
    }

    @Query(() => [Member], {name: 'getAllMember'})
    async getAllMember() {
        return await this.memberService.getAll();
    }

    @Mutation(() => Member,{name: 'createMember'})
    async createMember(@Args('input') createMemberDTO:CreateMemberDto):Promise<Member> {
        return await this.memberService.createOne(createMemberDTO);
    }

    @Mutation(() => Member,{name: 'updateMember'})
    async updateMember(
        @Args('id', {type:()=>Int}) id:number,
        @Args('input') updateMemberDTO:UpdateMemberDto
    ):Promise<UpdateResult> {
        return await this.memberService.updateMany(id, updateMemberDTO);
    }

    @Mutation(() => DeleteEntity, {name: 'deleteMember'})
    async deleteMember(@Args('id', {type:()=>Int}) id:number,):Promise<DeleteResult> {
        return await this.memberService.delete(id);
    }
}
