import { Injectable } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { AnimalDTO } from "src/shared/DTO/animals/Animal.dto";
import { AnimalId } from "src/shared/DTO/animals/AnimalId";
import { UpdateAgeAnimalDTO } from "src/shared/DTO/animals/UpdateAgeAnimal.dto";
import { AnimalsEntity } from "src/shared/entities/animals/Animals.entity";
import { Repository } from "typeorm";

@Injectable()
export class IncomingService{

    constructor(
        @InjectRepository(AnimalsEntity) private animalRepo : Repository<AnimalsEntity>
    ) {}

    async getAll() : Promise<[AnimalDTO[] , number]>{
        let allAnimals : [AnimalDTO[] , number] = await this.animalRepo.findAndCount({
            select : { 
                id : true,
                name : true,
                cityFound : true,
                age : true,
                category : true
            }
        })

        return allAnimals
    }


    getOne(animalId : AnimalId){
    }


    getOneByOneCateg(){
    }


    incomingNew(newArrival : AnimalDTO){
    }


    updateAge(animalId : AnimalId, newAge : UpdateAgeAnimalDTO){
    }


    deceasedAnimal(animalId : AnimalId){
    }
}