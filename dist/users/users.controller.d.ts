import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { updateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(newUser: createUserDto): Promise<User | import("@nestjs/common").HttpException>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | import("@nestjs/common").HttpException>;
    deleteUser(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    updateUser(id: number, user: updateUserDto): Promise<import("typeorm").UpdateResult>;
}
