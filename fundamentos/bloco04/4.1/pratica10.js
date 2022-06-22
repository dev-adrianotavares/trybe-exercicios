const custoProduto = 1000;
const imposto = (custoProduto * 20/100);
const custoTotal = custoProduto + imposto;
const valorVendaProduto = 1500;
const milVendas = 1000;
let lucro = valorVendaProduto - custoTotal;
if (custoProduto < 0 || valorVendaProduto < 0) {
  console.log("Erro! Insira um valor válido.")
}
else {
  console.log(lucro*milVendas)
}
