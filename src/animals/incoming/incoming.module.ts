import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnimalsEntity } from "src/shared/entities/animals/Animals.entity";
import { IncomingController } from "./incoming.controller";
import { IncomingService } from "./incoming.service";

@Module({
    imports : [
        TypeOrmModule.forFeature([
            AnimalsEntity
        ])
    ],
    controllers : [IncomingController],
    providers : [IncomingService]
})
export class IncomingModule {}