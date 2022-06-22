let salarioBruto = 1560;
let salarioInss = 0;
let salarioLiquido =0;
let aliquota = 0;
let impostoRenda = 0;
let parcela = 0;
let descont = 0;
if (salarioBruto >= 1556.94) {
  aliquota = salarioBruto * (8 / 100);
  salarioInss = salarioBruto - aliquota;
}
else if (salarioBruto <= 2594.92) {
  aliquota = salarioBruto * (9 / 100);
  salarioInss = salarioBruto - aliquota;
}
else if (salarioBruto <= 5189.82) {
  aliquota = salarioBruto * (11 / 100);
  salarioInss = salarioBruto - aliquota;
}
else {
  aliquota = 570.88;
  salarioInss = salarioBruto - aliquota;
}

if(salarioInss >= 1903.99) {
  impostoRenda = salarioInss * (7.5 / 100);
  parcela = 142.80;
  desconto = impostoRenda - parcela;
  salarioLiquido = salarioInss - desconto;
}
else if(salarioInss >= 2826.65) {
  impostoRenda = salarioInss * (15 / 100);
  parcela = 354.80;
  desconto = impostoRenda - parcela;
  salarioLiquido = salarioInss - desconto;
}
else if(salarioInss >= 3751,06) {
  impostoRenda = salarioInss * (22.5 / 100);
  parcela = 636,13;
  desconto = impostoRenda - parcela;
  salarioLiquido = salarioInss - desconto;
}
else {
  impostoRenda = salarioInss * (27.5 / 100);
  parcela = 869,36;
  desconto = impostoRenda - parcela;
  salarioLiquido = salarioInss - desconto;
}

console.log("O seu salário líquido é: " + salarioLiquido)


