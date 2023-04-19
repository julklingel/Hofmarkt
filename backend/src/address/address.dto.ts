import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class addressDto {
  @IsNotEmpty()
  @IsString()
  streetAddress: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  zip: string;
}

export class updateAddressDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  streetAddress?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  city?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  state?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  country?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  zip?: string;
}
