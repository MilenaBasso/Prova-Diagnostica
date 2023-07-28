/*Criança - até 11 anos de idade;
Adolescente - dos 12 até 20 anos de idade;
Adulto - dos 21 até 64 anos de idade;
Idoso - 65 anos ou mais;
*/

var nome;
var idade;
var resultado;


function fase() {
    idade= document.getElementById("idade").value;
    resultado= document.getElementById("resultado");


    if (idade >1 && idade <= 11) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> O paciente é uma criança." 
    } else if (idade >= 12 && idade <= 20) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> O paciente está na adolecência.";
    } else if (idade >= 21 && idade <= 64) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/>  O paciente é um adulto.";
    } else if (idade > 65) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/>  O paciente é um idoso.";
    }
}
