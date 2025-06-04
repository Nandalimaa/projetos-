var num1;
var num2;
var total;
function entrada(){
 //entrada de dados - input 
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;
}

function converter(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


}


function somar(){
   entrada();
   converter(); 
    total = num1 + num2;
    //saida, escrever na tela 
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}
function subtrair(){
   entrada();
   converter();
    total = num1 - num2;
    //saida, escrever na tela 
    tela = document.getElementById("resultado");
    tela.innerHTML = total;

}
function multiplicar(){
    entrada();
   converter();
   total = num1 * num2;
    //saida, escrever na tela 
    tela = document.getElementById("resultado");
    tela.innerHTML = total;

}
function dividir(){
    entrada();
   converter();
    total = num1 / num2;
    //saida, escrever na tela 
    tela = document.getElementById("resultado");
    tela.innerHTML = total;
}
 function limpa(){
    //entrada de dados - inputs
    num1 = document.getElementById("n1").value="";
    num2 = document.getElementById("n2").value="";
    tela = document.getElementById("resultado");
    tela.innerHTML = "";
 }