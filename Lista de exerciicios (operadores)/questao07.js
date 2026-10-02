const turno = Number(prompt("Escolha o turno (1 a 3):"))

switch (turno) {
  case 1:
    console.log("Turno: Manhã")
    break
  case 2:
    console.log("Turno: Tarde")
    break
  case 3:
    console.log("Turno: Noite")
    break
  default:
    console.log("Turno inválido")
}
