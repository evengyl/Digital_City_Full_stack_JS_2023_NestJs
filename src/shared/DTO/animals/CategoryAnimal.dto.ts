import { ApiProperty } from "@nestjs/swagger/dist"
import { IsOptional } from "class-validator"
import { AnimalsEntity } from "src/shared/entities/animals/Animals.entity"

export class CategoryAnimalDTO{

    @IsOptional()
    id : number

    @IsOptional()
    @ApiProperty({ example : "souris"})
    name : string

    @IsOptional()
    rangeAge : string

    @IsOptional()
    animals : AnimalsEntity[]
}