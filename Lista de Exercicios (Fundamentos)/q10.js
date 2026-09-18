const taxaIVA = 0.23; 
let produto = prompt("Qual é o produto?"); 
let precoBase = parseFloat(prompt(`Qual é o preço base de ${produto}?`)); 

let desejaCalcular = confirm(`O preço base é €${precoBase}. Ver o preço final com IVA?`);

if (desejaCalcular) {
    let precoFinal = precoBase + (precoBase * taxaIVA); 
    alert(`Preço final de ${produto} com IVA: €${precoFinal.toFixed(2)}`);
} else {
    alert("Operação cancelada.");
}