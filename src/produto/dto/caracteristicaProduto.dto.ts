import { IsNotEmpty } from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class CaracteristicaProdutoDTO {
  id: string;

  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  descricao: string;

  produto: ProdutoEntity;
}
