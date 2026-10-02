const compra = Number(prompt("Valor da compra:"))

console.log("Compra de R$ " + compra + " - " + (compra >= 150 ? "você tem frete grátis." : "frete de R$ 20,00."))
