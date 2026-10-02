function contarVogais(palavra){
    let qtdVogais=0;
    let vogais = ['a','e','i','o','u'];
    for(let i=0; i<palavra.length; i++){
        let letra= palavra[i].toLowerCase();
        if(vogais.includes(letra)){
            qtdVogais++;
        }
    }
    return qtdVogais;
}
console.log(contarVogais("Programaçao"));