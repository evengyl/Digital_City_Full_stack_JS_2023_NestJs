import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, ValidationPipe} from "@nestjs/common";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { AnimalDTO } from "src/shared/DTO/animals/Animal.dto";
import { AnimalId } from "src/shared/DTO/animals/AnimalId";
import { CategoryId } from "src/shared/DTO/animals/CategoryAnimal";
import { UpdateAgeAnimalDTO } from "src/shared/DTO/animals/UpdateAgeAnimal.dto";
import { AnimalsEntity } from "src/shared/entities/animals/Animals.entity";
import { IncomingService } from "./incoming.service";


@Controller("api/incoming")
export class IncomingController{
    
    constructor(
        private readonly incomingServe : IncomingService
    ){}

    @Get()
    getAll(
        @Query("colorfilter") colorFilter : boolean,
        @Query("weightFilter") weightFilter : boolean,
    ) : Promise<[AnimalDTO[] , number]>
    {
        return this.incomingServe.getAll()
    }


    @Get(":animalId")
    getOne( 
        @Param("animalId", ParseIntPipe) animalId : AnimalId
    ){
        return this.incomingServe.getOne(animalId)
    }


    @Get(":categoryId/:animalId")
    getOneByOneCateg(
        @Param("categoryId") categoryId : CategoryId,
        @Param("animalId") animalId : AnimalId
    ){
        console.log(categoryId)
        console.log(animalId)
    }


    @Post()
    incomingNew(
        @Body(ValidationPipe) newArrival : AnimalDTO
    ){
        return this.incomingServe.incomingNew(newArrival)
    }


    @Put(":animalId")
    updateAge(
        @Param("animalId", ParseIntPipe) animalId : AnimalId,
        @Body(ValidationPipe) newAge : UpdateAgeAnimalDTO
    ){
        return this.incomingServe.updateAge(animalId, newAge)
    }


    @Delete(":animalId")
    deceasedAnimal(
        @Param("animalId") animalId : AnimalId
    ){
        return this.incomingServe.deceasedAnimal(animalId)
//DEAD DE PUPUCE
    }
}