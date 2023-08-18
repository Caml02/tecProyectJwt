import { loginAuthDto } from "./login-auth.dto";
declare const registerAuthDto_base: import("@nestjs/common").Type<Partial<loginAuthDto>>;
export declare class registerAuthDto extends registerAuthDto_base {
    username: string;
}
export {};
