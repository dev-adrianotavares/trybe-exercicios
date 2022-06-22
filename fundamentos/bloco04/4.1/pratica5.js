//🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const ladoA = 30;
const ladoB = 60;
const ladoC = 90;
if (ladoA + ladoB + ladoC === 180) {
  console.log(true)
} 
else if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
  console.log("Um dos ângulos é inválido.")
}
else {
  console.log(false)
}