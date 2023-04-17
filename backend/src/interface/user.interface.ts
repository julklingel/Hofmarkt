import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { TransformBooleanString } from '../auth/decorator';

export interface userInterface {
  email: string;
  id: string;
  role: string;
  isVerified: boolean;
}
