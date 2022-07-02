function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ulDays = document.getElementById('days');

function adicionaDias () {
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = document.createElement('li');

    day.innerText = decemberDaysList[index]
    day.className = 'day'
    ulDays.appendChild(day);

    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31) {
      day.classList.add('holiday')
    }

    if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
      day.classList.add('friday')
    }
  }
}
adicionaDias();

// ========== Creating Holiday Button ==========


function criarBotao(nome, id) {
  let botao = document.createElement("button");
  let paiDoBotao = document.querySelector(".buttons-container");

  botao.innerText = nome; // atribui um texto ao elemento
  botao.id = id; // atribui um id ao elemento
  paiDoBotao.appendChild(botao);
}
criarBotao('Feriados', 'btn-holiday'); 

// ========== Muda a cor de fundo dos dias que possuem a classe "friday".

let botaoFeriados = document.getElementById('btn-holiday');
botaoFeriados.addEventListener('click', marcaFeriados)

function marcaFeriados() {
  let feriados = document.querySelectorAll('.holiday');
  
  for (let index = 0; index < feriados.length; index += 1) {
    feriados[index].style.backgroundColor = 'purple'
  }
}
