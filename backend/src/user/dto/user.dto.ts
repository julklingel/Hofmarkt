import { IsNotEmpty, IsString } from 'class-validator';
import { type } from 'os';

export class userDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  profileImage: string;
}
