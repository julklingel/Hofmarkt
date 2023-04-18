import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsOptional,
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
  companyName: string;

  @IsOptional()
  @IsPhoneNumber()
  @IsString()
  companyPhone: string;

  @IsOptional()
  @IsString()
  companyBio: string;

  @IsOptional()
  @TransformBooleanString()
  @IsBoolean()
  featured: any;
}
