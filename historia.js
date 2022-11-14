let boton = document.querySelectorAll('.boton');
let video = document.querySelector('video');
let duracion = document.getElementById('duracion');

const tiempo = (segundos) => {
    let hora = Math.floor(segundos / 3600);
    hora = (hora < 10)? '0' + hora : hora;
    var minuto = Math.floor((segundos / 60) % 60);
    minuto = (minuto < 10)? '0' + minuto : minuto;
    var segundo = segundos % 60;
    segundo = (segundo < 10)? '0' + segundo : segundo;
    duracion.innerHTML = `${hora} : ${minuto} : ${segundo.toFixed(0)}`;
}

boton[0].addEventListener('click',() => {
    video.play();
    tiempo(video.duration);
});

boton[1].addEventListener('click',() => {
    video.pause();
    
});



