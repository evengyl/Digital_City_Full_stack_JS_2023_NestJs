import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { LifeTimeEntity } from "../LifeTime.entity"

@Entity("animals")
export class AnimalsEntity extends LifeTimeEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column({length : 15, nullable : false, default : "N/C"})
    name : string

    @Column({ length : 15, nullable : false, default : "N/C"})
    category : string

    @Column({ length : 6, nullable : false, default : "N/C"})
    age : string

    @Column({ length : 25, nullable : false, default : "N/C"})
    cityFound : string
}