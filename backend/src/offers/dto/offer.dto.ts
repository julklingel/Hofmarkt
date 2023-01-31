import { IsInt, IsNotEmpty, IsString } from 'class-validator';


export class offerDto {

    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    supplierId: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsString()
    unit: string;



}