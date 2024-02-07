import { IsEnum, IsNumberString, IsOptional, IsString } from "class-validator";
import { UserGender } from "./user.entity";

export class UsersFilterableFields {
    @IsNumberString()
    @IsOptional()
    id?: number;

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsEnum(UserGender)
    @IsOptional()
    gender?: UserGender;
}