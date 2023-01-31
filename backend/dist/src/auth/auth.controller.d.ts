import { AuthService } from './auth.service';
import { signupDto, loginDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: signupDto): Promise<{
        access_token: string;
    }>;
    login(dto: loginDto): Promise<{
        access_token: string;
    }>;
}
