const name = 'Patrycja';
const age = 34;

console.log(
    `Nazywam się ${name} i mam ${age} lata. Witaj na mojej stronie :)`
);


const heading = document.querySelector('.first-level-heading--js');
heading.innerHTML = 'Patrycja - Nauka Frontendu';


const emptyParagraph = document.querySelector('.about-me__common-text--js');
emptyParagraph.innerHTML = 'Ćwiczenie z podmiany treści za pomocą js';
