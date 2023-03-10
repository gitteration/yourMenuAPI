import {Inject, Injectable} from '@nestjs/common';
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Member} from "./member.entity";
import {CreateMemberDto, UpdateMemberDto} from "./member.dto";
import {MemberRepository} from "./member.repository";

@Injectable()
export class MemberService {
    constructor(
        @Inject('MEMBER_REPOSITORY')
        private memberRepository: MemberRepository
    ) {
    }
    async getById(id):Promise<Member>{
        return await this.memberRepository.getById(id)
    }

    async getAll():Promise<Member[]>{
        return await this.memberRepository.getAll();
    }

    async createOne(createMember:CreateMemberDto):Promise<Member>{
        return await this.memberRepository.createOne(createMember);
    }

    async updateMany(id:number,updateMemberDto:UpdateMemberDto):Promise<UpdateResult>{
        return await this.memberRepository.updateMany(id,updateMemberDto);
    }

    async delete(id:number):Promise<DeleteResult>{
        return await this.memberRepository.delete(id);
    }

}
