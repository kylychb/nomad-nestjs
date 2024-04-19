import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ required: true, example: 'adk@gmail.com' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ required: true, example: '123' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
