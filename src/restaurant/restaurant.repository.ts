import {Inject, Injectable} from '@nestjs/common';
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {Restaurant} from "./restaurant.entity";
import {CreateRestaurantDto, UpdateRestaurantDto} from "./restaurant.dto";

@Injectable()
export class RestaurantRepository {
    constructor(
        @Inject('RESTAURANT_REPOSITORY')
        private restaurantRepository: Repository<Restaurant>
    ) {}

    async getById(id):Promise<Restaurant>{
        return await this.restaurantRepository.findOne({
            where:{
                id: id
            }
        });
    }

    async getAll():Promise<Restaurant[]>{
        return await this.restaurantRepository.find();
    }

    async createOne(createRestaurant:CreateRestaurantDto):Promise<Restaurant>{
        return await this.restaurantRepository.save(createRestaurant);
    }

    async updateMany(id:number,updateRestaurantDto:UpdateRestaurantDto):Promise<UpdateResult>{
        return await this.restaurantRepository.update(id,{

        });
    }

    async delete(id:number):Promise<DeleteResult>{
        return await this.restaurantRepository.delete(id);
    }






}
