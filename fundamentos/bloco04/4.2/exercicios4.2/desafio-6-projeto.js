// Desafio 6 - Crie uma função que calcula o número de repetições do maior número

function highestCount(numbers) {
  let maiorNumero = 0;
  for(let index in numbers) {
    if(numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
        return maiorNumero;
    }
  }
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))