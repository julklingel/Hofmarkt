import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): {
        msg: string;
    };
    login(dto: AuthDto): {
        msg: string;
    };
}
