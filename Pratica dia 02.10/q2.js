const aluno = {
    nome:"Pedro",
    idade:17,
    curso:"ADS"
};

function apresentarAluno(aluno){
    return `${aluno.nome.toUpperCase()} (${aluno.curso})`;
}
let maiusculo =apresentarAluno(aluno);
console.log(maiusculo); 
