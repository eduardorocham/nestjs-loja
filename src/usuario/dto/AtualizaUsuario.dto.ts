import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validacao/emailIsUnique.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não deve ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailIsUnique({ message: 'Já existe um usuário com este e-mail' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha deve possuir pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
