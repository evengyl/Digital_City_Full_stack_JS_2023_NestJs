import { IsDefined, IsNumber, IsPositive, Max, Min } from "class-validator";

export class UpdateAgeAnimalDTO{

    @IsDefined()
    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(99)
    newAge : number
}