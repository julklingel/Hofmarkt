import { BadRequestException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

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
  @Transform(({ value }) => {
    if (typeof value === 'string' && (value === 'true' || value === 'false')) {
      if (value.toLowerCase() === 'true') {
        return true;
      } else if (value.toLowerCase() === 'false') {
        return false;
      }
    }
    throw new BadRequestException('Invalid boolean value');
  })
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
