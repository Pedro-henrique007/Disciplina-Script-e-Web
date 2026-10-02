function cadastrarProdutoLista(lista, nome, preco){
    produto = {
        nome,
        preco,
    }
    lista.push(produto);
    return lista.length;
}
let lista = [];
console.log(cadastrarProdutoLista(lista, "Celular", 2000));
console.log(lista);
