const nota = 81;
let estadoProcesso;
if (nota >= 80){
  estadoProcesso= "Parabéns, você foi aprovado!"
} 
else if (nota < 80 && nota >= 60){
  estadoProcesso = "Você está na nossa lista de espera."
} 
else {
  estadoProcesso = "Você foi reprovado."
}

console.log(estadoProcesso)