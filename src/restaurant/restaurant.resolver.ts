import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {RestaurantService} from "./restaurant.service";
import {Restaurant} from "./restaurant.entity";
import {DeleteResult, UpdateResult} from "typeorm";
import {DeleteEntity} from "../entities/delete-entity";
import {CreateRestaurantDto, UpdateRestaurantDto} from "./restaurant.dto";

@Resolver()
export class RestaurantResolver {
    constructor(
        private readonly restaurantService:RestaurantService
    ) {}

    @Query(()=>Restaurant ,{name: 'getRestaurantById'})
    getById(@Args('id', {type:()=>Int}) id:number){
        return this.restaurantService.getById(id);
    }

    @Query(()=>[Restaurant], {name: 'getAllRestaurant'})
    getAll(){
        return this.restaurantService.getAll();
    }

    @Mutation(() => Restaurant,{name: 'createRestaurant'})
    private async createOne(@Args('input') createRestaurantDTO:CreateRestaurantDto):Promise<Restaurant> {
        return await this.restaurantService.createOne(createRestaurantDTO);
    }

    @Mutation(() => Restaurant,{name: 'updateRestaurantMany'})
    private async updateMany(
        @Args('id', {type:()=>Int}) id:number,
        @Args('input') updateRestaurantDTO:UpdateRestaurantDto
    ):Promise<UpdateResult> {
        return await this.restaurantService.updateMany(id, updateRestaurantDTO);
    }

    @Mutation(() => DeleteEntity, {name: 'deleteRestaurant'})
    private async delete(@Args('id', {type:()=>Int}) id:number,):Promise<DeleteResult> {
        return await this.restaurantService.delete(id);
    }


}
