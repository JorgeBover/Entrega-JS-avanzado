let reiniciar = document.querySelector('button');
let contenedor = document.getElementsByClassName('contenedor');
let tarjetas = document.getElementsByClassName('tarjeta');

const arrastre = (evento, i)=>{
    evento.dataTransfer.setData('text', evento.target.src);

    tarjetas[i].addEventListener('dragend',()=>{
        tarjetas[i].style.visibility="hidden";
        
    });
};

const colocar = (i) => {
    contenedor[i].addEventListener('dragover', (evento)=>{
        evento.preventDefault();
    });

    contenedor[i].addEventListener('drop', (evento)=>{
        let dato = evento.dataTransfer.getData('text');
        contenedor[i].innerHTML = `<img class="tarjetaColocada" draggable="false" src="${dato}">`;
        evento.dataTransfer.clearData('text');
    });    
};

reiniciar.addEventListener('click', ()=>{
    location.reload();
});



