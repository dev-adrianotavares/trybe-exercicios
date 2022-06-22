//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);


//o método .push() adiciona um novo item no final do array. Se precisarmos adicionar no início, podemos usar o .unshift().

//O método .pop() nos permite remover o último item do array. Agora, se precisarmos remover o primeiro item da lista, podemos usar o .shift().

//Outra importante ferramenta é o indexOf(), usado para procurar o índice de um item no Array.

//Exercício 1
//Obtenha o valor "Serviços" do array menu:
//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//let menuServices = menu[1]

// console.log(menuServices);


//Exercício 2
//Procure o índice do valor "Portfólio" do array menu:
//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//let indexOfPortfolio = menu[2];

//console.log(indexOfPortfolio);

//Exercício 3
//Adicione o valor "Contato" no final do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato')
console.log(menu);
