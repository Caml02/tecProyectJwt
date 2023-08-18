import { IsNotEmpty } from "class-validator";
import { loginAuthDto } from "./login-auth.dto";
import { PartialType } from "@nestjs/swagger";

export class registerAuthDto extends PartialType (loginAuthDto){
    @IsNotEmpty()
    username: string;
}