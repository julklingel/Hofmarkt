import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { TransformBooleanString } from '../decorator';

export class signupDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'pass123' })
  @IsString()
  @IsNotEmpty()
  @MinLength(12)
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

export class resetMailDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class resetTokenDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  token: string;
}

export class resetPasswordDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  token: string;

  @ApiProperty({ example: 'pass123' })
  @IsString()
  @IsNotEmpty()
  @MinLength(12)
  password: string;
}

export class confirmationCodeDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  token: string;
}

export interface userInterface {
  id: string;
  role: string;
  isVerified: boolean;
}
