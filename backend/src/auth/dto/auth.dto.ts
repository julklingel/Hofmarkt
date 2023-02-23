import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class signupDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @IsString()
    @IsNotEmpty()
    password: string;

    @IsBoolean()
    isSupplier: boolean;
}



export class loginDto {
    @IsEmail()
    @IsNotEmpty()
    email?: string;

    @IsString()
    @IsNotEmpty()
    password?: string;
}
