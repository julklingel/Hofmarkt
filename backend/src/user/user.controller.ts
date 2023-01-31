import { Controller, Get, Patch, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
 
  // Display User Information
  @Get('me')
  getOwnUser(@GetUser()user) {
    return this.userService.getOwnUser(user);
  }

  // Patch User Information
  @Patch('me')
  getOneUser2() {
    return 'me2';
  }
}
