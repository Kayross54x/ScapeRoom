var mm = 0;
var ss = 0;
var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;
var cont = 0;
//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pauser() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stope() {
    clearInterval(cron);
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}





//Musica

const button = document.querySelector('#play')
var conta = 0
button.addEventListener('click', function(){
    const audio = document.querySelector('audio')
    audio.volume = 0.5
    conta = conta + 1 
    audio.play()
    if (conta%2 == 0){
        audio.pause()
        document.getElementById('headphone').src = "img/headphonemute.png";
    }
    else {
        document.getElementById('headphone').src = "img/headphone.svg";
    };
});