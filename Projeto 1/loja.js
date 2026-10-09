const nomeloja = "Game Station";

const produtos = [6];

produtos[0]={
    nome:"Grand Theft Auto VI",
    categoria:"Ação",
    preco:450,
    quantidade:100,
    vendidos:0
}
produtos[1]={
    nome:"Minecraft",
    categoria:"Sandbox",
    preco:120,
    quantidade:100,
    vendidos:0
}
produtos[2]={
    nome:"Elden Ring",
    categoria:"Souls Like",
    preco:250,
    quantidade:4,
    vendidos:0
}
produtos[3]={
    nome:"Terraria",
    categoria:"Mundo aberto",
    preco:20,
    quantidade:30,
    vendidos:0
}
produtos[4]={
    nome:"Zelda",
    categoria:"Aventura",
    preco:130,
    quantidade:2,
    vendidos:0
}
produtos[5]={
    nome:"Sekiro",
    categoria:"Acao",
    preco:200,
    quantidade:45,
    vendidos:0
}
function listarProdutos(produtos){
    for (let i=0;i<produtos.length;i++){
        console.log(`1${produtos.nome[i]} | ${produtos.categoria[i]} | ${produtos.preco[i]} | ${produtos.quantidade[i]} | ${produtos.vendidos[i]}`)
        console.log("\n")
    }
}
