import {Inject, Injectable} from '@nestjs/common';
import {RestaurantRepository} from "./restaurant.repository";
import {DeleteResult, UpdateResult} from "typeorm";
import {Restaurant} from "./restaurant.entity";
import {CreateRestaurantDto, UpdateRestaurantDto} from "./restaurant.dto";

@Injectable()
export class RestaurantService {
    constructor(
        @Inject('RESTAURANT_REPOSITORY')
        private readonly restaurantRepository:RestaurantRepository
    ) {}

    async getById(id):Promise<Restaurant>{
        return await this.restaurantRepository.getById(id)
    }

    async getAll():Promise<Restaurant[]>{
        return await this.restaurantRepository.getAll();
    }

    async createOne(createRestaurant:CreateRestaurantDto):Promise<Restaurant>{
        return await this.restaurantRepository.createOne(createRestaurant);
    }

    async updateMany(id:number,updateRestaurantDto:UpdateRestaurantDto):Promise<UpdateResult>{
        return await this.restaurantRepository.updateMany(id,updateRestaurantDto);
    }

    async delete(id:number):Promise<DeleteResult>{
        return await this.restaurantRepository.delete(id);
    }




}
