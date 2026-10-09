// Tarefa 1
const nomeloja = "Game Station";

const produtos =[ {
    nome:"Grand Theft Auto VI",
    categoria:"Acao",
    preco:450,
    quantidade:100,
    vendidos:0
},
{
    nome:"Minecraft",
    categoria:"Sandbox",
    preco:120,
    quantidade:100,
    vendidos:0
},
{
    nome:"Elden Ring",
    categoria:"Souls Like",
    preco:250,
    quantidade:4,
    vendidos:0
},
{
    nome:"Terraria",
    categoria:"Mundo aberto",
    preco:20,
    quantidade:30,
    vendidos:0
},
{
    nome:"Sekiro",
    categoria:"Acao",
    preco:200,
    quantidade:45,
    vendidos:0
},
{
    nome:"Mario",
    categoria:"Acao",
    preco:40,
    quantidade:3,
    vendidos:0
}
];

// Tarefa 2
function listarProdutos(lista){
    for (let i=0;i<lista.length;i++){
        
        console.log(`${1+[i]}: Nome: ${lista[i].nome} | Categoria: ${lista[i].categoria} | Preço: ${lista[i].preco} | Quantidade: ${lista[i].quantidade} | Vendidos: ${lista[i].vendidos}`)
        console.log("\n")
    }
}
// Tarefa 3
function cadastrarProduto(lista,nome,categoria,preco,quantidade){
    const novo ={
        nome: nome,
        categoria:categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos:0
    }
    lista.push(novo)
    return lista.length;
}

// Tarefa 4
function calcularValorEstoque(lista){
    let soma=0;
    for(let k=0;k<produtos.length;k++){
        soma= soma+ (produtos.preco[k]*produto.quantidade[k])
    }
    return soma;
    console.log(`O valor da soma dos produtos é ${soma}`);
}
// Tarefa 5
function buscarProduto(lista,termo){
    const busca= termo.toLowerCase();
    for(let k=0;k<lista.length;k++){
        if(lista[k].nome.toLowerCase().includes(busca)){
            return lista[k];
        }
    }
    return null;
}
// Tarefa 6
function produtosEmFalta(lista, minimo){
    const emFalta = [];
    for(let k=0;k<lista.length;k++){
        if(lista[k].quantidade<minimo){
            emFalta.push(lista[k]);
        }
    }
}
//Tarefa 7
function aplicarDesconto(lista,categoria,percentual){
    let produtos_alterados=0;
    for(let k=0;k<lista.length;k++){
        if(lista[k].categoria.toLowerCase()===categoria.toLowerCase()){
            lista[k].preco=lista[k].preco-(lista[k].preco*percentual/100);
            produtos_alterados++;
        }
    }
    return produtos_alterados;
}

//Tarefa 8




console.log();
listarProdutos(produtos);