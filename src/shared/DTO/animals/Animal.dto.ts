import { IsDefined, IsNumber, IsString, MaxLength, MinLength } from "class-validator"


export class AnimalDTO{

    @IsNumber()
    @IsDefined()
    id : number

    @IsString()
    @IsDefined()
    @MaxLength(15)
    @MinLength(2)
    name : string

    @IsString()
    @IsDefined()
    @MaxLength(15)
    @MinLength(2)
    category : string

    @IsString()
    @IsDefined()
    @MaxLength(6)
    @MinLength(5)
    age : string

    @IsString()
    @IsDefined()
    @MaxLength(25)
    @MinLength(2)
    cityFound : string
}