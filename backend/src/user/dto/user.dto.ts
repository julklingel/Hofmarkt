import { IsNotEmpty, IsString } from 'class-validator';

export class userDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsString()
  imageUrl: string;
}
