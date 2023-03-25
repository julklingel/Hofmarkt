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
  @IsString()
  companyLogo: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @IsString()
  companyPhone: string;

  @IsString()
  companyBio: string;

  @TransformBooleanString()
  @IsBoolean()
  featured: any;

  @IsString({ each: true })
  @IsOptional()
  supplierImages: string[];
}
