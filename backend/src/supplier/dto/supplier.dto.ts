import { IsNotEmpty, IsString, IsEmail, IsBoolean } from 'class-validator';

export class supplierDto {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  companyLogo: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  companyEmail: string;

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
  @IsString()
  slug: string;


  @IsNotEmpty()
  featured: any;
}
