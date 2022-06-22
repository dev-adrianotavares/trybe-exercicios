//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const jogoDeXadrez = "PEAO"

switch (jogoDeXadrez.toLowerCase()) {
  case "rei":
    console.log("Move-se em qualquer direção, uma casa por vez.");
    break;

  case "dama":
    console.log("Move-se em qualquer direção, quantas casas quiser.");
    break;
      
  case "torre":
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
    break;
    
  case "bispo":
    console.log("Move-se na diagonal, quantas casas quiser.");
    break;
    
  case "cavalo":
    console.log("O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.");
    break;
  
  case "peao":
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
    break;
  
  default:
    console.log("Insira o nome de uma peça de xadrez.");
}