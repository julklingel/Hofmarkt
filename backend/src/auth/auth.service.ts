import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    signup(dto: AuthDto){
        return {msg: 'Wuuhuuu, you are signed up'};
    }
    login(dto: AuthDto){
        return {msg: 'Wuuhuuu, you are logged in'};
    }

    
 
}