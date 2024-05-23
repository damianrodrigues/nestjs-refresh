import {
  IsEnum,
  IsString,
  IsEmail,
  IsNotEmpty,
  NotEquals,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @NotEquals(null)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Role must be one of INTERN, ENGINEER, ADMIN',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
