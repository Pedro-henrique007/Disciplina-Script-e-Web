const idade = 20
const possuiConvite = false

if (idade >= 18 && possuiConvite) {
  console.log("Entrada permitida.")
} else if (!possuiConvite) {
  console.log("Entrada negada.")
  console.log("Motivo: não possui convite.")
} else {
  console.log("Entrada negada.")
  console.log("Motivo: menor de idade.")
}
