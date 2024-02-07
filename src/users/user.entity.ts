import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    gender: UserGender;
}

export enum UserGender {
    MALE = 'M',
    FEMALE = 'F',
    NONBINARY = 'N',
    OTHER = 'O',
}
