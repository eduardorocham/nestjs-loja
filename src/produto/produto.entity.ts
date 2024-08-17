import { CaracteristicaProdutoDTO } from './dto/caracteristicaProduto.dto';
import { ImagemProdutoDto } from './dto/imagemProdutoDto.dto';

export class ProdutoEntity {
  id: string;
  usuarioId: string;
  nome: string;
  valor: number;
  quantidade: number;
  descricao: string;
  caractarirsticas: CaracteristicaProdutoDTO[];
  imagens: ImagemProdutoDto[];
  categoria: string;
}
