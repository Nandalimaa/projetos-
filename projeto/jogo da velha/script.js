//criando um variavel, espaço de memoria que armazena um valor 
var jogador="x";
//uma função executa alguma ação, quando chamada 
//celuala é um parâmetro, um valor da celula é passada para a função 
function jogar(celula){
     //se a celula estiver vazia, pdoe marcar
     // == IGUAL
     // != DIFERENTE
     // < MENOR
     // > MAIOR  
    if(celula.innerHTML=="")
    //escrever na celula o "x" ou a "o"
    celula.innerHTML = jogador; 

    if(jogador == "x" ){
        jogador = "o";   //alterna a variavel para"o"
        celula.style.backgroundColor = "red"; //altear a cor de fundo
        celula.style.color = "black";     //alterar co da letra 
    } else{
        jogador = "x";   //se não alterna a variavel para "x"
        celula.style.backgroundColor = "blue";
        celula.style.color = "white"; 
    }

    
}
function reiniciar(){
    //criar lista com todos os quadrados 
    var celula = document.querySelectorAll("td");

    for(var contador=0; contador < 9; contador ++ ){
        celula[contador].innerHTML = "";
        celula[contador].style.backgroundColor= "";
    }
}
var nomes = ['Isabela', 'Bruno', 'Rafael', 'Angelo', 'fernanda','thiago' ];
function sortear(){
    //lista / vetor
    //entre aspas é ums String: tipo de dados de texto
    //              0         1         2         3

    
    var nome1 = nomes[ Math.floor( Math.random() * nomes.length) ];
    var nome2 = nomes[ Math.floor( Math.random() * nomes.length) ];
    
    //enquanto nome1 === nome2
    if(nome1 === nome2){
        sortear();
    }else{
        alert("jogador: " + nome1+ "vs"+ nome2);
        //escrever na tela
        document.getElementById('jogador1').textContent = nome1;
        document.getElementById('jogador2').textContent = nome2;
    }

  

    /*
    alert("Sorteio de número com random" + Math.random());
    alert("Encontrando posição da lista: " + Math.random() * nomes.length);
    alert("Encontrando posição da lista 2: " +Math.floor(Math.random()*nomes.length));
    */
}
function adicionar{
    //pega o texto do input cm o id = nome
        var nome = document.getElementById("nome").value;
        //adicionar nome na lista 
        nome.posh(nome); 
}
