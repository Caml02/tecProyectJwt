import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from '../users/users.service'; // Importa el UsersService
import { User } from '../users/user.entity';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async register(user: User) {
    const userFound = await this.usersService.findByUsername(user.username);

    if (userFound) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const hashedPassword = await hash(user.password, 10);
    user.password = hashedPassword;

    return this.usersService.createUser(user);
  }

  async login(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    
    const payload = { id: user.id, name:user};
    const token = await this.jwtService.sign(payload)
    const data = {
      username:user,
      token,
    };
    return data;

  }
}
