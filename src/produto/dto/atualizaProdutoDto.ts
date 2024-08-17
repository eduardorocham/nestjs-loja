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
  IsOptional,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './caracteristicaProduto.dto';
import { Type } from 'class-transformer';
import { ImagemProdutoDto } from './imagemProdutoDto.dto';

export class AtualizaProdutoDTO {
  @IsUUID(undefined)
  usuarioId: string;

  @IsNotEmpty()
  @IsOptional()
  nome: string;

  @IsPositive()
  @Min(1)
  @IsOptional()
  valor: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  quantidade: number;

  @IsNotEmpty()
  @MaxLength(100)
  @IsOptional()
  descricao: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested()
  @Type(() => CaracteristicaProdutoDTO)
  @IsOptional()
  caracteristicas: CaracteristicaProdutoDTO[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => ImagemProdutoDto)
  @IsOptional()
  imagens: ImagemProdutoDto[];

  @IsNotEmpty()
  @IsOptional()
  categoria: string;
}
