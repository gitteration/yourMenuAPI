import {Inject, Injectable} from '@nestjs/common';
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Member} from "./member.entity";
import {CreateMemberDto, UpdateMemberDto} from "./member.dto";

@Injectable()
export class MemberService {
    constructor(
        @Inject('MEMBER_REPOSITORY')
        private memberRepository: Repository<Member>
    ) {
    }
    async findMemberById(id):Promise<Member>{
        return await this.memberRepository.findOne({
            where:{
                id: id
            }
        });
    }

    async findAllMember():Promise<Member[]>{
        return await this.memberRepository.find();
    }

    async createMember(createMember:CreateMemberDto):Promise<Member>{
        return await this.memberRepository.save(createMember);
    }

    async updateMember(id:number,updateMemberDto:UpdateMemberDto):Promise<UpdateResult>{
        return await this.memberRepository.update(id,{
            weather:updateMemberDto.weather,
            feeling:updateMemberDto.feeling,
            gender:updateMemberDto.gender,
            phone_number:updateMemberDto.phone_number
        });
    }

    async deleteMember(id:number):Promise<DeleteResult>{
        return await this.memberRepository.delete(id);
    }

}
