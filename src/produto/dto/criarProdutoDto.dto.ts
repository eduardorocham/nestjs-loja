import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsUUID,
  IsNotEmpty,
  IsPositive,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './caracteristicaProduto.dto';
import { Type } from 'class-transformer';
import { ImagemProdutoDto } from './imagemProdutoDto.dto';

export class CriaProdutoDTO {
  @IsUUID(undefined)
  usuarioId: string;

  @IsNotEmpty()
  nome: string;

  @IsPositive()
  @Min(1)
  valor: number;

  @IsInt()
  @Min(0)
  quantidadeDisponivel: number;

  @IsNotEmpty()
  @MaxLength(100)
  descricao: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => ImagemProdutoDto)
  imagens: ImagemProdutoDto[];

  @IsNotEmpty()
  categoria: string;
}
