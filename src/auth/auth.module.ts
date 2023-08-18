import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; 
import { User } from '../users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstanst } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UsersModule,
  JwtModule.register ({
    global: true,
    secret: jwtConstanst.secret,
    signOptions: {expiresIn: '60s'},
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
