function buscarAluno(lista, nomeBuscado){
    for(let i=0; i<lista.length; i++){
        if(lista[i].nome.toLowerCase()===nomeBuscado.toLowerCase()){
            return lista[i];
        }

    }
    return null;
}
let lista = [
    {nome: "Ana", idade:20},
    {nome: "Pedro", idade:17}
];
console.log(buscarAluno(lista, "PEDRO"));
