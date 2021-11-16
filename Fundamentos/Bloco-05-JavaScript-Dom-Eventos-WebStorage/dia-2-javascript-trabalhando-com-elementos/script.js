const elementOndeVoceEsta = document.getElementById ('elementoOndeVoceEsta');

console.log (elementOndeVoceEsta)



const pai = elementoOndeVoceEsta.parentElement;
    pai.style.color = 'gray'



const primeiroFilho = elementOndeVoceEsta.firstElementChild;

primeiroFilho.innerText = 'aooo galo doido'

const primeiroFilho = pai.firstElementChild;

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

const textElement = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;