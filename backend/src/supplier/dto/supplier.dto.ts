import { IsNotEmpty, IsString } from 'class-validator';

export class supplierDto {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  companyLogo: string;

  @IsNotEmpty()
  companyPhone: any;

  @IsNotEmpty()
  companyAddress: string;

  @IsString()
  companyImage: string;

  @IsNotEmpty()
  @IsString()
  companyBio: string;

  @IsNotEmpty()
  featured: any;
}
