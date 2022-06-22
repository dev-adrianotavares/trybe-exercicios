let notaAluno = 99;

if (notaAluno < 0 || notaAluno > 100) {
  console.log("ERRO! Nota inválida. Informe uma nota entre 0 e 100.")
}
else if (notaAluno >= 90) {
  console.log("A sua nota é A.")
} 
else if (notaAluno >= 80) {
  console.log("A sua nota é B.")
}
else if (notaAluno >= 70) {
  console.log("A sua nota é C.")
}
else if (notaAluno >= 60) {
  console.log("A sua nota é D.")
}
else if (notaAluno >= 50) {
  console.log("A sua nota é E.")
}
else {
  console.log("A sua nota é F.")
}