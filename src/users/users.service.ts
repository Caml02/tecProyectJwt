import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    //createUsers Route
    async createUser(user: createUserDto) {
        const userFound = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        });

        if (userFound) {
            return new HttpException('User Already exist', HttpStatus.CONFLICT)
        }
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }
    // GetAllUsers Route
    getUsers() {
        return this.userRepository.find();
    }

    //GetUser By id route
    async getUser(id: number) {
        const userFound = await this.userRepository.findOne({
            where: {
                id
            }
        });

        if(!userFound) {
            return new HttpException('user not found', HttpStatus.NOT_FOUND)
        }

        return userFound;
    }

    // Delete Route
    async deleteUser(id: number) {
        
        const result = await this.userRepository.delete({ id });
        if (result.affected === 0) {
            return new HttpException('user not found', HttpStatus.NOT_FOUND)
        }
        return result;
    }

    // Update Route
    updateUser(id: number, user: updateUserDto) {
        return this.userRepository.update({ id }, user);
    }

    async findByUsername(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({ 
            where: {
                username
            } 
        });
    }
}

