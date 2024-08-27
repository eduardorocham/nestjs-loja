import { IsNotEmpty, IsUrl } from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class ImagemProdutoDto {
  id: string;
  @IsUrl()
  url: string;
  @IsNotEmpty()
  descricao: string;

  produto: ProdutoEntity;
}
