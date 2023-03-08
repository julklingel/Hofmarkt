import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { TransformBooleanString } from '../decorator';

export class signupDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'pass123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'true' })
  @TransformBooleanString()
  @IsBoolean()
  isSupplier: boolean;
}

export class loginDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'pass123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
