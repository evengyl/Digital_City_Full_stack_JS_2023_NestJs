import { Injectable } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions";
import { AnimalDTO } from "src/shared/DTO/animals/Animal.dto";

@Injectable()
export class IncomingService{
    listAnimal : AnimalDTO[] = [
        {
            "name" : "pupuce",
            "category" : "Chat",
            "age" : "5 ans",
            "cityFound" : "Auderghem"
        },
        {
            "name" : "channel",
            "category" : "Chiwawa",
            "age" : "5 ans",
            "cityFound" : "Auderghem"
        },
        {
            "name" : "flipper",
            "category" : "Dauphin",
            "age" : "2 ans",
            "cityFound" : "Auderghem"
          }
    ] 



    getAll() : Promise<AnimalDTO[]>
    {
        return new Promise<AnimalDTO[]>((resolve, reject) => {
            
            if(this.listAnimal.length == 0 )
                reject()
            else
                resolve(this.listAnimal)
            

        }).catch((error) => {
            throw new HttpException("List corrupted", 500)
        })
    }
    
    

}