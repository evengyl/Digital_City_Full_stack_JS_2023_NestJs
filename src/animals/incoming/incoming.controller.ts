import { Body, Controller, Delete, Get, Param, Post, Put, Query} from "@nestjs/common";


@Controller("api/incoming")
export class IncomingController{

    @Get()
    getAll(
        @Query("colorfilter") colorFilter : boolean,
        @Query("weightFilter") weightFilter : boolean,
    ){
        console.log(colorFilter)
        console.log(weightFilter)
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