let salarioBruto = 2000;
let aliquota = 0;
let salarioBase;
let impostoRenda;
let parcela;
if (salarioBruto <= 1556.94) {
  aliquota = salarioBruto * (8 / 100);
}
else if (salarioBruto <= 2594.92) {
  aliquota = salarioBruto * (9 / 100);
}
else if (salarioBruto <= 5189.82) {
  aliquota = salarioBruto * (11 / 100);
}
else {
  aliquota = 570.88;
}

salarioBase = salarioBruto - aliquota;
console.log(salarioBase)

if(salarioBase > 1903.99) {
  impostoRenda = salarioBase * (7.5 / 100);
  parcela = 142.80;
}