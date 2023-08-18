import { AuthService } from './auth.service';
import { User } from '../users/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerUser(user: User): Promise<User | import("@nestjs/common").HttpException>;
    loginUser(credentials: {
        username: string;
        password: string;
    }): Promise<{
        username: User;
        token: string;
    }>;
}
