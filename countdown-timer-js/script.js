const selectedDate = '1 Jan 2023'

const days = document.querySelector('#days');
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')


function countdown(){
    const currentDate = new Date();  // new Date(); já retorna o dia e o horário atual
    const dataCounter = new Date(selectedDate)  // new Date() com parâmetro retorna a data de dentro

    const timeLeft = dataCounter.getTime() - currentDate.getTime();  // Retorna a quantidade de milisegundos entre as duas datas

    const secondsDate = Math.floor(timeLeft/1000); // divide os ms totais por 1000 para saber os segundos
    seconds.innerText = formatTime(secondsDate%60) // o resto da divisão acima, são os reais segundos

    const minutesDate = Math.floor(secondsDate/60); // divide os segundos por 60 para saber os minutos
    minutes.innerText = formatTime(minutesDate%60); // o resto da divisão acima, são os reais minutos

    const hoursDate = Math.floor(minutesDate/60); // divide os minutos por 60 para saber as horas
    hours.innerText = formatTime(hoursDate%60) // o resto da divisão acima, são as reais horas

    const daysDate = Math.floor(hoursDate /24); // divide as horas por 24 para saber os dias
    days.innerText = formatTime(daysDate); 
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;  // se o tempo da caixa for menor que 10, adiciona o 0 pra ficar Ex: "02"
}

countdown()
setInterval(countdown, 1000) // função que recebe 2 parâmetros, o 1º que define qual a função que vai ser executada e o 2º que define a cada quanto tempo (1000ms = 1s)
