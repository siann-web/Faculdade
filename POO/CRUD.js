class Produto {
    constructor(nome, descricao, preco, qtd) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this;qtd = qtd;
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }
    addProduto(produto){
        this.produtos.push(produto);
    }
 // create product - cadastro de produto    
    listProduto(produto){
        return this.produtos;
}
// read product - ler o produto
}

const estoque = new Estoque();

estoque.addProduto(
    new Produto("Rexona 200 ml Turbo MK2", "Desodorante Masculino",20.99,100)
)

estoque.addProduto(
    new Produto("Rexona 200 ml Belissima", "Desodorante Feminino",25.99,100)
)

console.log('Lista de Produtos Cadastrados');
console.log(estoque.listProduto())