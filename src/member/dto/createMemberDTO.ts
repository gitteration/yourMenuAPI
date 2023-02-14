import {IsEmpty, Length, MaxLength, ValidateNested} from 'class-validator';
import {GENDER, WEATHER} from "../member.entity";
import {ArgsType, Field, InputType} from "@nestjs/graphql";

@ArgsType()
@InputType({
    description:'맴버 생성 DTO'
})
export class CreateMemberDTO {
    @Field({ nullable: true , description:'test'})
    @Length(1,20,{
        message: 'Weather is not validate length(1-20)'
    })
    @IsEmpty({
        message: 'Weather is not empty'
    })
    @ValidateNested({
        message: `Weather is not validate (${WEATHER})`
    })
    weather: WEATHER;

    @Field()
    @Length(1,2,{
        message: 'feeling is not validate length(0~10)'
    })
    @IsEmpty({
        message: 'feeling is not empty'
    })
    feeling: number;

    @Field()
    @Length(1,1,{
        message: 'gender is not validate length(1)'
    })
    @IsEmpty({
        message: 'gender is not empty'
    })
    @ValidateNested({
        message: `Gender is not validate (${GENDER})`
    })
    gender: GENDER;

    @Field()
    @Length(1,20,{
        message: 'phone_number is not validate length(1-20)'
    })
    @IsEmpty({
        message: 'phone_number is not empty'
    })
    phone_number: string;



}
