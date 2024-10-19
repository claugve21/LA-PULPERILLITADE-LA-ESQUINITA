let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Cambia cada 3 segundos

// Sección de galeria
const btnMostrarMas = document.getElementById('mostrar-mas');
const imagenesOcultas = document.querySelectorAll('.galeria-item.hidden');

btnMostrarMas.addEventListener('click', () => {
    imagenesOcultas.forEach(imagen => {
        imagen.classList.toggle('hidden');
    });
    btnMostrarMas.textContent = btnMostrarMas.textContent === 'Mostrar más' ? 'Mostrar menos' : 'Mostrar más';
});

// Para hacer que las imágenes se agranden al hacer clic
document.querySelectorAll('.galeria-item img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});
// Código para la pantalla de carga
document.addEventListener("DOMContentLoaded", () => {
    let progress = 0;
    const progressBar = document.querySelector(".progress");
    const loadingText = document.getElementById("loading-text");
    
    // Simular la carga con un intervalo
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + "%";
        loadingText.textContent = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            // Ocultar la pantalla de carga después de un pequeño retraso
            setTimeout(() => {
                document.body.classList.add("loaded");
            }, 500);
        }
    }, 50); // Controla la velocidad del incremento (50ms para hacer que dure 5 segundos)
});