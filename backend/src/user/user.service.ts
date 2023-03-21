import { Injectable } from '@nestjs/common';

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
