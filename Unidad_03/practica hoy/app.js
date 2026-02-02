// Seleccionar el div container
const container = document.querySelector('.container');


<section>
        <p>Hola Pepe, espero que estéis aprendiendo algo.
        </p>
    </section> ;
// Crear article
const article = document.createElement('article');

// Crear strong con clase green
const strong = document.createElement('strong');
strong.className = 'green';
strong.textContent = '¡Texto en verde!';

// Estructura: article > strong
article.appendChild(strong);

container.appendChild(parrafo);
container.appendChild(article);
