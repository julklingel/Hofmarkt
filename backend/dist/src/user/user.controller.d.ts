import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getOwnUser(user: any): any;
    getWorld(): string;
    getOneUser2(): string;
}
