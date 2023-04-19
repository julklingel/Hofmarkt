import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsOptional,
  MinLength,
} from 'class-validator';
import { TransformBooleanString } from '../../auth/decorator';

export class supplierDto {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @IsString()
  companyPhone: string;

  @IsString()
  companyBio: string;

  @TransformBooleanString()
  @IsBoolean()
  featured: any;
}

export class updateSupplierDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  companyName?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  slug?: string;

  @IsOptional()
  @IsPhoneNumber()
  @IsString()
  @MinLength(1)
  companyPhone?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  companyBio?: string;

  @IsOptional()
  @TransformBooleanString()
  @IsBoolean()
  @MinLength(1)
  featured?: any;
}
