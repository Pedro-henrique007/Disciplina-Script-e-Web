const senha = "ifpb2026"
let tentativa
let tentativas = 0

do {
  tentativa = prompt("Digite a senha:")
  tentativas++
} while (tentativa !== senha)

console.log("Bem-vindo! Você acertou em " + tentativas + " tentativa(s).")
