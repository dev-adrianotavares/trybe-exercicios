//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const x = 10;
const y = 100;
const z = 1000;

if (x > y && x > z) {
  console.log(x)
}
else if (y > x && y > z) {
  console.log(y)
}
else {
  console.log(z)
}
