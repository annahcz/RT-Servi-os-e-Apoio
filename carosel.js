let slideIndex = 1;
showSlides(slideIndex);

// Função para mudar o slide (botões prev/next)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para ir direto a um slide (dots)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Troca automática a cada 5 segundos
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000);