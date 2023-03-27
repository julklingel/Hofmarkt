import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

// To do: price and amount type should be number
export class offerDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsString({ each: true })
  @IsOptional()
  images: string[];

  @IsNotEmpty()
  @IsString()
  supplierId: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  unit: string;

  @IsNotEmpty()
  @IsString()
  amount: string;
}
