import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { Repository } from 'typeorm';
import { AtualizaProdutoDTO } from './dto/atualizaProdutoDto';
import { CriaProdutoDTO } from './dto/criarProdutoDto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async criaProduto(dadosProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.usuarioId = dadosProduto.usuarioId;
    produtoEntity.categoria = dadosProduto.categoria;
    produtoEntity.descricao = dadosProduto.descricao;
    produtoEntity.nome = dadosProduto.nome;
    produtoEntity.quantidadeDisponivel = dadosProduto.quantidadeDisponivel;
    produtoEntity.valor = dadosProduto.valor;
    produtoEntity.imagens = dadosProduto.imagens;
    produtoEntity.caracteristicas = dadosProduto.caracteristicas;

    await this.produtoRepository.save(produtoEntity);
  }

  async listaProdutos() {
    await this.produtoRepository.find();
  }

  async atualizaProduto(id: string, dados: AtualizaProdutoDTO) {
    await this.produtoRepository.update(id, dados);
  }

  async deletaProduto(id: string) {
    await this.produtoRepository.delete(id);
  }
}
