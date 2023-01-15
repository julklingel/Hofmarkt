import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    signup(dto: AuthDto): {
        msg: string;
    };
    login(dto: AuthDto): {
        msg: string;
    };
}
