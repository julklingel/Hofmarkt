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
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { GetUser, Roles } from '../auth/decorator';
import { userDto } from './dto';
import { addressDto } from '../address';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageUploadFileFilter } from '../imageUpload';
import { userInterface } from '../interface';

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

  @UseGuards(RolesGuard)
  @Roles('BUYER')
  @Post('create')
  @UseInterceptors(
    FileInterceptor('image', {
      fileFilter: imageUploadFileFilter,
      limits: {
        fileSize: 1 * 1024 * 1024, // 1 MB in bytes
      },
    }),
  )
  async createUser(
    @GetUser() user: userInterface,
    @Body() dto: userDto,
    @Body() address: addressDto,
    @UploadedFile()
    file: Express.Multer.File = null,
  ) {
    return this.userService.createUser(user, dto, address, file);
  }
}
