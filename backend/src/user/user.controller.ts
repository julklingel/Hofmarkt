import { Controller, Get, Patch, UseGuards, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { userDto } from './dto';
import { addressDto } from '../address';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Display User Information
  @Get('me')
  getOwnUser(@GetUser() user) {
    return this.userService.getOwnUser(user);
  }

  // Patch User Information
  @Patch('me')
  getOneUser2() {
    return 'me2';
  }

  @Post('create')
  createSupplier(
    @GetUser() user: any,
    @Body() dto: userDto,
    @Body() address: addressDto,
  ) {
    return this.userService.createUser(user, dto, address);
  }
}
