import { Injectable, Req } from '@nestjs/common';

@Injectable()
export class UserService {
    getOwnUser(user) {
        user = {
            id: user.id,
            email: user.email,
        };
        return user;
    }
}

 