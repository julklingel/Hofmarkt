import { IsNotEmpty, IsString } from 'class-validator';

export class supplierDto {
  supplierId: string;

  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  companyLogo: string;

  @IsNotEmpty()
  companyPhone: any;

  @IsString()
  companyImage: string;

  @IsString()
  companyBio = '';

  featured: any;
}
