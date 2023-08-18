import { IsEmail } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name:'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    username: string;
    @Column()
    password: string;
    @Column({ unique: true }) 
    @IsEmail()
    email: string;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
    @Column({nullable: true})
    authStrategy: string;
}

