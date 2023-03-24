import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
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
  companyImage: string;

  @IsString()
  companyBio: string;

  @TransformBooleanString()
  @IsBoolean()
  featured: any;
}
