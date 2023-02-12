import {Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {Member} from "./member.entity";
import {CreateMemberDTO} from "./dto/createMemberDTO";

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

    async create(createMember:CreateMemberDTO):Promise<Member>{
        return await this.memberRepository.save(createMember);
    }


}
