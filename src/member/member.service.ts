import {Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {Member} from "./member.entity";
import {CreateMemberDto} from "./member.dto";

@Injectable()
export class MemberService {
    constructor(
        @Inject('MEMBER_REPOSITORY')
        private memberRepository: Repository<Member>
    ) {
    }
    async getAll():Promise<Member[]>{
        return await this.memberRepository.find();
    }

    async create(createMember:CreateMemberDto):Promise<Member>{
        return await this.memberRepository.save(createMember);
    }


}
