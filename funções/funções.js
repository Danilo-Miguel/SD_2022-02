/*Funções: Bloco ou conjunto de instruções que realiza  uma ação*/

//Criação de funções de forma literal
function primeira_funçao(){ 
    console.log("Primeira função")
 }
 primeira_funçao()


 // Função com parâmetro
 function segunda_funcao(numero){
 console.log("Segunda função " + numero)
 }
 segunda_funcao(10)
 

// função com retorno

 function terceira_funcao(){
   var mensagem = "Olá mundo";
   return mensagem; 
 }
 console.log(terceira_funcao())
 

 // função com retorno e parametros
 function soma(a , b){
    return a + b
 }

 var resultado = soma(5, 8)
 console.log(resultado)

 // funções anônimas

 var dobro = function(n) {
    return n * 2
 }

 var resultado  = dobro(10)
 console.log(resultado)

  // funções, arrow function

 var olaMundo = () => console.log("Olá mundo")
 olaMundo()

 var dobro = (valor) => valor  * 2
 console.log(dobro(10))

 var triplo = (valor) => {
    return  valor * 3
 }
 console.log(triplo(20))


//   devolvidas por outra função


//   Funções atribuidas a uma variável
  var minhaFuncao = function(){
    console.log("Fui atribuida a uma variável")
 }
minhaFuncao()

//  Funções como argumento para outras funções
function funcao_parametro(funcao){
    funcao()
}

// Funções criadas por outras funções
function essaFuncao(){
    function outraFuncao(){
        console.log("Fui criada por essaFuncao")

    }
    return outraFuncao
}
console.log(essaFuncao)


// Execuação Sincrona e Assincrona
console.log("Eu primeiro")
console.log("Agora serei eu")
console.log("Eu serei a ultima")

var a  = 2 + 7
var b  = 10
console.log(a + b)

function espera (){
    var mais2Segundos = new Date().getTime + 2000
    while(new Date().getTime() <= mais2Segundos);
    var d  = 8 + 4
    return d
}

var a  = 2 + 3
var b  = 5 + 9

setTimeout(function(){
    var d = espera()
    console.log(d)
},500)

var e  = a + b
console.log(e)


// funções callback

var fs = require("fs")
var abrir = function(arquivo){
    var exibirConteudo = function(erro, conteudo){
        if(erro){
            console.log("Erro ao abrir o arquivo : ${erro}");
        }else{
            //console.log(conteudo.toString())
            //var dobro  = +conteudo.toString()  * 2
           //const finalizar  = function(erro){
            console.log(conteudo.toString());
                /*if(erro){
                    console.log("Erro ao abrir ao salvar o dobro")

                }else{
                    console.log("Salvo com sucesso")

                }*/
        }
        };
        //fs.writeFile('dobro.txt', dobro.toString, finalizar )
    //}
//};
fs.readFile(arquivo, exibirConteudo);
};
abrir("arquivo.txt")