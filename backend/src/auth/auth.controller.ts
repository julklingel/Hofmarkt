import { Controller, Post, Get, Body, HttpCode , Param, Query} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { signupDto, loginDto, resetMailDto, resetTokenDto , resetPasswordDto, confirmationCodeDto} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({ description: '{ message : "Account created successfully"}' })
  @Post('signup')
  signup(@Body() dto: signupDto) {
    return this.authService.signup(dto);
  }

  @ApiOkResponse({ description: '{ access_token: token}' })
  @HttpCode(200)
  @Post('login')
  login(@Body() dto: loginDto) {
    return this.authService.login(dto);
  }


  @ApiOkResponse({ description: '{ message: Email successfully fired!}' })
  @HttpCode(200)
  @Post('send-reset-mail')
  sendResetCode(@Body() dto: resetMailDto) {
    return this.authService.sendResetCode(dto);
  }

  @ApiOkResponse({ description: '{ message: Code successfully verified!}' })
  @HttpCode(200)
  @Post('enter-resetCode')
  verifyResetCode(@Body() dto: resetTokenDto) {
    return this.authService.verifyResetCode(dto);
  }


@ApiOkResponse({ description: '{ message: Code successfully verified!}' })
@HttpCode(200)
@Post('reset-password')
resetPassword(@Body() dto: resetPasswordDto) {
  return this.authService.resetPassword(dto);
}

@ApiOkResponse({ description: '{ message: Code successfully verified!}' })
@HttpCode(200)
@Get('confirm/:email/:code')
async confirmEmail(@Param('email') emailDto: string, @Param('code') tokenDto: string)  {
  return this.authService.confirmAccount(emailDto, tokenDto);
}
}




