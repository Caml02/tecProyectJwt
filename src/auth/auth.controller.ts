import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async registerUser(@Body() user: User) {
    return this.authService.register(user);
  }

  @Post('login')
  async loginUser(@Body() credentials: { username: string; password: string }) {
    return this.authService.login(credentials.username, credentials.password);
  }
}
