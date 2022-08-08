/* SELECIONAR ELEMENTOS */ 

console.log(document.documentElement) //seleciona toda a pagina
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header') //seleciona um elemento especifico, id/class
const allSections = document.querySelectorAll('.section') //seleciona todos os elementos que tenham o mesmo nome passado
console.log(allSections) //querySelectorAll retorna um array.. necessário uma estrutura de repetição para percorrer o array

document.getElementById('section--1') //Seleciona apenas Id.. no caso do querySelector é necessário utilizar #antes
const allButons = document.getElementsByTagName('button') //seleciona todos os botões, também em um HTMLCollection, apenas tags
console.log(allButons)

document.getElementsByClassName('btn') //Seleciona todas as classes btn, em uma HTMLCollection
//HTMLCollection atualiza a quantidade de elementos selecionadas automaticamente
//Se criar uma variavel com os botões(4) em seguida apagar um botão da pagina e já chamar a variavel novamente, ela vai trazer apenas três botões


/* CRIAR E INSERIR ELEMENTOS */
// .insertAdjacentHTML

const mensagem = document.createElement('div')
mensagem.classList.add('cookie-message')
/*mensagem.textContent = 'Cookie'*/
mensagem.innerHTML = 'Cookie. <button class="btn btn--close-cookie"> Got it!</button>'

//header.prepend(mensagem)
header.append(mensagem)
//header.append(mensagem.cloneNode(true))

//header.before(mensagem)
//header.after(mensagem)


/* DELETAR ELEMENTOS */
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    mensagem.remove();
})


/* ESTILOS */
mensagem.style.backgroundColor = '#37383d'
mensagem.style.width = '120%'

console.log(getComputedStyle(mensagem)) //Tras todos os estilos da folha de estilo
console.log(getComputedStyle(mensagem).color) 

mensagem.style.height = Number.parseFloat(getComputedStyle(mensagem).height, 10) + 30 + 'px';

/* ALTERAR UMA PROPRIEDADE CSS */
document.documentElement.style.setProperty('--color-primary', 'orangered')

/* ATRIBUTOS */
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.src)
console.log(logo.getAttribute('src'))

console.log(logo.designer) //undefined
console.log(logo.getAttribute('designer'))

logo.setAttribute('company', 'Bankist')
console.log(logo.getAttribute('company'))


/* CLASSES */
logo.classList.add('');     // ADICIONA UMA CLASSE
logo.classList.remove('');  // REMOVE UMA CLASSE
logo.classList.toggle('');  // SE A CLASSE EXISTIR REMOVE, SE NÃO ADICIONA
logo.classList.contains('');// VERIFICA SE EXISTE A CLASSE