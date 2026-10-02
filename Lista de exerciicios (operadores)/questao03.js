const vendido = Number(prompt("Valor vendido:"))
const meta = Number(prompt("Meta do mês:"))

console.log("Vendido: " + vendido + " | Meta: " + meta)
console.log("Atingiu a meta? " + (vendido >= meta))
console.log("Superou a meta? " + (vendido > meta))
console.log("Bateu exatamente? " + (vendido === meta))
console.log("Diferença: " + (vendido - meta))
