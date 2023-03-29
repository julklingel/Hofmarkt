import {
  Controller,
  Get,
  Patch,
  UseGuards,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { userDto } from './dto';
import { addressDto } from '../address';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageUploadPipe } from '../imageUpload';

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
  @UseInterceptors(FileInterceptor('image'))
  async createUser(
    @GetUser() user: any,
    @Body() dto: userDto,
    @Body() address: addressDto,
    @UploadedFile(imageUploadPipe)
    file: Express.Multer.File,
  ) {
    return this.userService.createUser(user, dto, address, file);
  }
}
