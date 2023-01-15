import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    signup(){
        return 'Hi there from signup';
    }
    login(){
        return 'Hello there from login';
    }

    
 
}