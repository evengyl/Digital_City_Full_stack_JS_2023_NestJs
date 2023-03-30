import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query} from "@nestjs/common";
import { AnimalDTO } from "src/shared/DTO/animals/Animal.dto";
import { IncomingService } from "./incoming.service";


@Controller("api/incoming")
export class IncomingController{
    
    constructor(
        private readonly incomingServe : IncomingService
    ){}

    @Get()
    async getAll(
        @Query("colorfilter") colorFilter : boolean,
        @Query("weightFilter") weightFilter : boolean,
    ) : Promise<AnimalDTO[]>
    {
        return await this.incomingServe.getAll()
    }


    @Get(":animalId")
    getOne(
        @Param("animalId") animalId : number
    ){
        console.log(animalId)
    }


    @Get(":categoryId/:animalId")
    getOneByOneCateg(
        @Param("categoryId") categoryId : number,
        @Param("animalId") animalId : number
    ){
        console.log(categoryId)
        console.log(animalId)
    }


    @Post()
    incomingNew(
        @Body() newArrival : any
    ){
        console.log(newArrival)
    }


    @Put(":animalId")
    outputAnimal(
        @Param("animalId") animalId : number,
        @Body() newAge : any
    ){
        console.log(animalId)
        console.log(newAge)
    }


    @Delete(":animalId")
    deceasedAnimal(
        @Param("animalId") animalId : number
    ){
        console.log(animalId)
//DEAD DE PUPUCE
    }
}