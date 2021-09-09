let index = 1;

muestraSlides(index);


function avanzaSlide(n){
    muestraSlides(index+=n);
}

function posicionSlide(n){
    muestraSlides(index=n);
}

function muestraSlides(n){
    const slides = document.getElementsByClassName('slide');
    const bars = document.getElementsByClassName('barra');

    if(n > slides.length){
        index = 1;
    }
    if(n < 1){
        index = slides.length;
    }
    for(let i = 0;i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(let i = 0;i<bars.length; i++){
        bars[i].className = bars[i].className.replace(' activeBar', '');
    }

    slides[index-1].style.display = 'block';
    bars[index-1].className += ' activeBar';
}