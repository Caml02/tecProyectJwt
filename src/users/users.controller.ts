import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch, UseGuards } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { updateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() newUser: createUserDto) {
        return this.usersService.createUser(newUser);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    } 

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUser(id);
    } 

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: updateUserDto) {
        return this.usersService.updateUser(id, user);
    }
}

