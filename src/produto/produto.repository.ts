import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos: ProdutoEntity[] = [];

  private buscaPorId(id: string) {
    const possivelProduto = this.produtos.find(
      (produtoSalvo) => produtoSalvo.id === id,
    );

    if (!possivelProduto) {
      throw new Error('Produto não encontrado');
    }

    return possivelProduto;
  }

  listaTodos() {
    return this.produtos;
  }

  salva(dadosProduto: ProdutoEntity) {
    this.produtos.push(dadosProduto);
  }

  atualiza(id: string, dados: Partial<ProdutoEntity>) {
    const produto = this.buscaPorId(id);

    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave === id) return;
      produto[chave] = valor;
    });

    return produto;
  }

  deleta(id: string) {
    const produtoParaDeletar = this.buscaPorId(id);

    this.produtos.filter((produto) => produto.id !== produtoParaDeletar.id);

    return produtoParaDeletar;
  }
}
