const nomeloja = "Game Station";

const produtos =[ {
    nome:"Grand Theft Auto VI",
    categoria:"Ação",
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


function listarProdutos(lista){
    for (let i=0;i<lista.length;i++){
        
        console.log(`${1+[i]}: ${lista[i].nome} | ${lista[i].categoria} | ${lista[i].preco} | ${lista[i].quantidade} | ${lista[i].vendidos}`)
        console.log("\n")
    }
}
function cadastrarProduto(lista,nome,categoria,preco,quantidade){
   
}


function calcularValorEstoque(lista){
    let soma=0;
    for(let i=0;i<produtos.length;i++){
        soma= soma+ (produtos.preco[i]*produto.quantidade[i])
    }
    return soma;
    console.log(`O valor da soma dos produtos é ${soma}`);
}

function buscarProduto(lista,termo){
    for(let k=0;k<lista.length;i++){
        if(termo.toLowerCase()===lista.nome.toLowerCase()[i]){
            return lista[i];
        }
        return null;
    }
}





console.log();
listarProdutos(produtos);