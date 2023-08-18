import { HttpException } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: createUserDto): Promise<User | HttpException>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | HttpException>;
    deleteUser(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
    updateUser(id: number, user: updateUserDto): Promise<import("typeorm").UpdateResult>;
    findByUsername(username: string): Promise<User | undefined>;
}
