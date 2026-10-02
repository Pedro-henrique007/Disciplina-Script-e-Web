const temperatura = Number(prompt("Temperatura ambiente:"))
let clima

if (temperatura < 15) {
  clima = "Fria"
} else if (temperatura <= 25) {
  clima = "Amena"
} else {
  clima = "Quente"
}

console.log(temperatura + " graus - clima: " + clima)
