import {
  Controller,
  Get,
  Patch,
  UseGuards,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard, RolesGuard } from '../auth/guard';
import { GetUser, Roles } from '../auth/decorator';
import { userDto, updateUserDto } from './dto';
import { addressDto, updateAddressDto } from '../address';
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

  @UseGuards(RolesGuard)
  @Roles('BUYER')
  @Patch('update/:id')
  @UseInterceptors(
    FileInterceptor('image', {
      fileFilter: imageUploadFileFilter,
      limits: {
        fileSize: 1 * 1024 * 1024, // 1 MB in bytes
      },
    }),
  )
  async updateUser(
    @Param('id') id: string,
    @GetUser() user: userInterface,
    @Body() dto: updateUserDto,
    @Body() address: updateAddressDto,
    @UploadedFile()
    file: Express.Multer.File = null,
  ) {
    return this.userService.updateUser(id, user, dto, address, file);
  }

  @UseGuards(RolesGuard)
  @Roles('BUYER')
  @Delete('delete/:id')
  async deleteUser(
    @Param('id') id: string,
    @GetUser() user: userInterface,
  ) {
    return this.userService.deleteUser(id, user);
  }
}

