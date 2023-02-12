import {Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {Member} from "./member.entity";

@Injectable()
export class MemberService {
    constructor(
        @Inject('MEMBER_REPOSITORY')
        private memberRepository: Repository<Member>
    ) {
    }
    async findAll():Promise<Member[]>{
        return await this.memberRepository.find();
    }



}
