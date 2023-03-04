import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SubscriberDTO {
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  country: string;
}
