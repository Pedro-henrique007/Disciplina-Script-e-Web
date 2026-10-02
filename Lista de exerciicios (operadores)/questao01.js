const totalItens = 47
const itensPorCaixa = 6
const dimensao = 4

console.log("Itens: " + totalItens)
console.log("Caixas completas: " + Math.floor(totalItens / itensPorCaixa))
console.log("Itens sobrando: " + totalItens % itensPorCaixa)
console.log("Posições no depósito: " + dimensao ** 3)
