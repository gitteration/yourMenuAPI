import {InputType, OmitType} from "@nestjs/graphql";
import {Restaurant} from "./restaurant.entity";

@InputType('createRestaurantDto',{
    description:'음식점 생성 DTO'
})
export class CreateRestaurantDto extends OmitType(
    Restaurant,
    ['id','createdDate','updateDate'],
    InputType
){}

@InputType('updateRestaurantDto',{
    description:'맴버 수정 DTO'
})
export class UpdateRestaurantDto extends OmitType(
    Restaurant,
    ['id','createdDate','updateDate'],
    InputType
){}


