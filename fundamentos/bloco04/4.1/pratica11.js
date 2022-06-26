let salarioBruto = 5190;
if(salarioBruto <= 1556.94) {
  salarioBruto *= 0.92;
}
else if(salarioBruto <= 2594.92) {
  salarioBruto *= 0.91;
}
else if(salarioBruto <= 5189.82) {
  salarioBruto = salarioBruto * 0.89;
}
else {
  salarioBruto -= 570.88;
}
console.log("O salario após o desconto do INSS será: " + salarioBruto.toFixed(2) + " reais.")

let parcelaIR;
let aliquotaIR;
let calculoIR;
if(salarioBruto >= 1903.99) {
  parcelaIR = 142.80;
  aliquotaIR = (salarioBruto * 0.075) - parcelaIR;
  salarioBruto -= aliquotaIR;
}
else if(salarioBruto >= 2826.66) {
  parcelaIR = 354.80;
  aliquotaIR = (salarioBruto * 0.15) - parcelaIR;
  salarioBruto -= aliquotaIR;
}
else if(salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
  parcelaIR = 636.13;
  aliquotaIR = (salarioBruto * 0.225) - parcelaIR;
  salarioBruto -= aliquotaIR;
}
else {
  parcelaIR = 869.36;
  aliquotaIR = (salarioBruto * 0.275) - parcelaIR;
  salarioBruto -= aliquotaIR;
}

console.log('O seu salário após os descontos do INSS e Imposto de Renda (salário líquido) será: ' + salarioBruto + ' reais.')