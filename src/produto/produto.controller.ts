import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/criarProdutoDto.dto';
import { ProdutoEntity } from './produto.entity';
import { AtualizaProdutoDTO } from './dto/atualizaProdutoDto';
import { ProdutoService } from './produto.service';

@Controller('produtos')
export class ProdutoController {
  constructor(
    private readonly produtoService: ProdutoService,
    private readonly produtoRepository: ProdutoRepository,
  ) { }

  @Post()
  criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.usuarioId = dadosProduto.usuarioId;
    produtoEntity.categoria = dadosProduto.categoria;
    produtoEntity.descricao = dadosProduto.descricao;
    produtoEntity.nome = dadosProduto.nome;
    produtoEntity.quantidade = dadosProduto.quantidade;
    produtoEntity.valor = dadosProduto.valor;
    // produtoEntity.imagens = dadosProduto.imagens;
    // produtoEntity.caractarirsticas = dadosProduto.caracteristicas;

    this.produtoService.criaProduto(produtoEntity);
    return {
      produto: produtoEntity,
      mensagem: 'produto criado com sucesso!',
    };
  }

  @Get()
  listaTodos() {
    return this.produtoService.listaProdutos();
  }

  @Put('/:id')
  atualiza(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO) {
    const produtoAtualizado = this.produtoService.atualizaProduto(
      id,
      novosDados,
    );

    return {
      produto: produtoAtualizado,
      mensagem: 'produto atualizado com sucesso!',
    };
  }

  @Delete('/:id')
  deleta(@Param('id') id: string) {
    const produtoDeletado = this.produtoService.deletaProduto(id);

    return {
      produto: produtoDeletado,
      mensagem: 'produto deletado com sucesso',
    };
  }
}
