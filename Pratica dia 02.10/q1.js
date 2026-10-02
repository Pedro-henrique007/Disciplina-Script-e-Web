function nomesMaiusculos(nomes){
    let maiusculas= [];
    for(let i=0; i<nomes.length;i++){
        maiusculas.push(nomes[i].toUpperCase());
    }
    return maiusculas;

}
let listaOriginal= ["ana", "pedro", "antonio"]
let maiusculas= nomesMaiusculos(listaOriginal);
console.log(maiusculas);