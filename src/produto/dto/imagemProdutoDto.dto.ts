import { IsNotEmpty, IsUrl } from 'class-validator';

export class ImagemProdutoDto {
    @IsUrl()
    url: string;
    @IsNotEmpty()
    descricao: string;
}
