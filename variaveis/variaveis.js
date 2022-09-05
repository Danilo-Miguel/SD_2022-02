// O Java Script é case-sensitive

/* Comentários em javascript. O que é comentário? É uma informação ou descrição
 que pode ser adicionado a um bloco de código. O compilador não executa o comentário
ele o ignora. É possível criar comentários de uma ou multiplas linha */


//Tipos de declarações de variáveis

//Permite declarar uma variável que pode ser inicializada ou não
var x 
var y = 20
console.log(" O tipo da variável validade é " + typeof x + " e o valor é " + x)
console.log(" O tipo da variável validade é " + typeof y + " e o valor é " + y)


// let, é usado para declarar uma variável de local

if(true){
    let a = 13
    var b = 12
    console.log("O valor da variavel a é: " + a)
    console.log("O valor da variavel b é: " + b)
}

console.log("O valor da variavel b é: " + b)
console.log("O valor da variavel a é: " + a)


//const,  é usado para declarar uma variável de escopo imutavel
const nome  = "Danilo"

if(true){
nome  = "Miguel"
console.log("Meu nome é ", nome)
}


// Tipo de dados básicos JavaScript

// Boolean, recebe os valores true o false
var validade = false
var autorizacao =  true
console.log(" O tipo da variável validade é " + typeof validade + " e o valor é " + validade)
console.log(" O tipo da variável autorização é " + typeof autorizacao + "  e o valor é " + autorizacao)


// Undefined, Variável declarada mas não inicializada.
var indefinida 
console.log("O tipo da variavel indefinida é " + typeof indefinida + " e o valor é " + indefinida)           


// Null, Variável declarada com valor nullo
var nulo =  null
console.log("O tipo da variavel validade é nulo é ", + typeof nulo, "e o valor é " + nulo)
var valor  = null == undefined
console.log("Qual é o valor de variável valor", valor)

//Number, variáveis númericas
// Números inteiros
var numero_inteiro = 200

// Ponto flutuante
var ponto_flutuante = 2.5

// String, dados textuais
var dado_textual = "Essa é uma String"