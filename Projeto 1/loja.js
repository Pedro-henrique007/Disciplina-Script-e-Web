// ===== 1. DADOS =====
// Tarefa 1
const nomeLoja = "Game Station";

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

// ===== 2. FUNÇÕES =====

// Tarefa 2
function listarProdutos(lista){
    for (let i=0;i<lista.length;i++){
        console.log(`${i+1}. ${lista[i].nome} | ${lista[i].categoria} | R$ ${lista[i].preco} | ${lista[i].quantidade} un. | ${lista[i].vendidos} vendidos`)
    }
}

// Tarefa 3
function cadastrarProduto(lista,nome,categoria,preco,quantidade){
    const novo ={
        nome: formatarNome(nome),
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
    for(let k=0;k<lista.length;k++){
        soma= soma+ (lista[k].preco*lista[k].quantidade)
    }
    return soma;
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
    return emFalta;
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
function registrarVenda(lista, nome, quantidade) {
  const produto = buscarProduto(lista, nome);
  if (produto === null || produto.quantidade < quantidade) {
    return false;
  }
  produto.quantidade = produto.quantidade - quantidade;
  produto.vendidos = produto.vendidos + quantidade;
  return true;
}

// Tarefa 9
function formatarNome(texto) {
  const limpo = texto.trim();
  return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}

// Tarefa 10
function converterParaJSON(lista) {
  return JSON.stringify(lista);
}

function lerJSON(texto) {
  return JSON.parse(texto);
}

// Tarefa 11
function gerarRelatorio(nome, lista) {
  const baixo = produtosEmFalta(lista, 5);
  console.log(`===== RELATÓRIO: ${nome.toUpperCase()} =====`);
  console.log(`Produtos cadastrados: ${lista.length}`);
  console.log(`Valor total em estoque: R$ ${calcularValorEstoque(lista)}`);
  console.log(`Produtos com estoque baixo: ${baixo.length}`);
  for (let i = 0; i < baixo.length; i++) {
    console.log(`- ${baixo[i].nome} (${baixo[i].quantidade} un.)`);
  }
}

// ===== 3. PROGRAMA PRINCIPAL =====
// Efetivação do programa completo

console.log("--- Tarefa 2: listar ---");
listarProdutos(produtos);

console.log("--- Tarefa 3: cadastrar ---");
const totalProdutos = cadastrarProduto(produtos, "  fIFA 25 ", "Esporte", 300, 4);
console.log(`Produto cadastrado! Agora a loja tem ${totalProdutos} produtos.`);

console.log("--- Tarefa 4: valor do estoque ---");
console.log(`Valor do estoque: R$ ${calcularValorEstoque(produtos)}`);

console.log("--- Tarefa 5: buscar ---");
const achado = buscarProduto(produtos, "ELDEN RING");
if (achado !== null) {
  console.log(`Encontrado: ${achado.nome} - R$ ${achado.preco}`);
}
const naoAchado = buscarProduto(produtos, "Zelda");
if (naoAchado === null) {
  console.log("Produto não encontrado.");
}

console.log("--- Tarefa 6: em falta ---");
const faltando = produtosEmFalta(produtos, 5);
console.log(`Produtos com menos de 5 unidades: ${faltando.length}`);

console.log("--- Tarefa 7: desconto ---");
const qtdDesconto = aplicarDesconto(produtos, "Acao", 10);
console.log(`${qtdDesconto} produtos receberam desconto.`);
console.log(`Novo preço do Sekiro: R$ ${buscarProduto(produtos, "Sekiro").preco}`);

console.log("--- Tarefa 8: registrar venda ---");
if (registrarVenda(produtos, "Elden Ring", 3)) {
  const r = buscarProduto(produtos, "Elden Ring");
  console.log(`Venda realizada! ${r.nome}: ${r.quantidade} un. em estoque, ${r.vendidos} vendidos.`);
}
if (!registrarVenda(produtos, "Elden Ring", 100)) {
  console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

console.log("--- Tarefa 9: formatar nome ---");
console.log(formatarNome(" bORRACHA branca "));

console.log("--- Tarefa 10: JSON ---");
const texto = converterParaJSON(produtos);
console.log(typeof texto);
const recuperados = lerJSON(texto);
console.log(`Itens recuperados: ${recuperados.length} | Primeiro: ${recuperados[0].nome}`);

console.log("--- Tarefa 11: relatório ---");
gerarRelatorio(nomeLoja, produtos);