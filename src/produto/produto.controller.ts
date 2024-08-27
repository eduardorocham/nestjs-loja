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
import { v4 as uuid } from 'uuid';
import { AtualizaProdutoDTO } from './dto/atualizaProdutoDto';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoRepository: ProdutoRepository) { }

  @Post()
  criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.id = uuid();
    produtoEntity.usuarioId = dadosProduto.usuarioId;
    produtoEntity.nome = dadosProduto.nome;
    // produtoEntity.caractarirsticas = dadosProduto.caracteristicas;
    produtoEntity.categoria = dadosProduto.categoria;
    produtoEntity.descricao = dadosProduto.descricao;
    // produtoEntity.imagens = dadosProduto.imagens;
    produtoEntity.quantidade = dadosProduto.quantidade;
    produtoEntity.valor = dadosProduto.valor;

    this.produtoRepository.salva(produtoEntity);
    return {
      produto: produtoEntity,
      mensagem: 'produto criado com sucesso!',
    };
  }

  @Get()
  listaTodos() {
    return this.produtoRepository.listaTodos();
  }

  @Put('/:id')
  atualiza(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO) {
    const produtoAtualizado = this.produtoRepository.atualiza(id, novosDados);

    return {
      produto: produtoAtualizado,
      mensagem: 'produto atualizado com sucesso!',
    };
  }

  @Delete('/:id')
  deleta(@Param('id') id: string) {
    const produtoDeletado = this.produtoRepository.deleta(id);

    return {
      produto: produtoDeletado,
      mensagem: 'produto deletado com sucesso',
    };
  }
}
