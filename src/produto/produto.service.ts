import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { Repository } from 'typeorm';
import { AtualizaProdutoDTO } from './dto/atualizaProdutoDto';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository: Repository<ProdutoEntity>,
    ) { }

    async criaProduto(produtoEntity: ProdutoEntity) {
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
