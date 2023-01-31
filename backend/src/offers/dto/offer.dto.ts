import { IsInt, IsNotEmpty, IsString } from 'class-validator';

// Fix tye issue on price and amount 
export class offerDto {

    @IsNotEmpty()
    @IsString()
    title: string;


    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    img: string;

    @IsNotEmpty()
    @IsString()
    supplierId: string;

    @IsNotEmpty()
<<<<<<< HEAD
    price: number;
=======
    @IsString()
    price: string;
>>>>>>> 02e68d1 (b: replace product by offer)

    @IsNotEmpty()
    @IsString()
    unit: string;

    @IsNotEmpty()
    @IsString()
    amount: string;




}