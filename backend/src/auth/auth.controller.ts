import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { signupDto, loginDto } from './dto/auth.dto';

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
}
