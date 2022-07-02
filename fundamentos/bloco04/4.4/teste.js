//🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 100];
let maiorNumero = [0];
for(let index = 0 ; index < numbers.length ; index += 1) {
  if(numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
} 
console.log(maiorNumero)






//6 - Crie uma função que calcula o número de repetições do maior número
//Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números.
// Caso o parâmetro seja um array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.