
// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

// alert("Heloo Word!!");
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 10;
const numberTwo = 15;
const soma = numberOne + numberTwo;

 console.log(soma);
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const isNumber = 15;
if(typeof isNumber === "number"){
  console.log("Sim, é um número")
}else {
  console.log("Não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isName = "Julieta";

if(typeof isName === "string") {
  console.log("Sim, é uma string")
}else {
  console.log("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const fazSol = true;

if(typeof fazSol === "boolean"){
  console.log("Sim, é um boolean")
}else {
  console.log("Não é um boolean")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const duzia = 12;
const dezena = 10;

const subtrair = duzia - dezena;
console.log(subtrair);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const multiplicar = dezena * duzia;

console.log(multiplicar);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const dividir = duzia / dezena;

console.log(dividir);

//9. 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const numeroQualquer = 20;

if(numeroQualquer % 2 == 0){
  console.log("Sim, é um número par")
}else {
  console.log("Não é um número par")
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". 
 
const numeroAleatorio = 7;

if(numeroAleatorio % 2 == 1){
  console.log("Sim, é um número impar")
}else {
  console.log("Não é um número impar")
}