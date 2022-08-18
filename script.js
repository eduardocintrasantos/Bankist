const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

const nav = document.querySelector('.nav');


//Modal Create account
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    };
});



// Scroll
btnScrollTo.addEventListener('click', () => {
    //const s1coords = section1.getBoundingClientRect();

    /*window.scrollTo(
        s1coords.left + window.pageXOffset,
        s1coords.top + window.pageYOffset
    );*/

    /*window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: 'smooth'
    })*/

    section1.scrollIntoView({behavior: 'smooth'})
});

/*document.querySelectorAll('.nav__link').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    });
});*/
document.querySelector('.nav__links').addEventListener('click', function(e) {
    e.preventDefault();
    
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        //console.log(id);
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    };
});

/* MENU ANIMAÇÃO FADE */
const handleHover = function(e, opacity) {
    if(e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el => {
            if(el !== link) el.style.opacity = opacity;
        });
        logo.style.opacity = opacity;
    }
}

nav.addEventListener('mouseover', function(e) {
    handleHover(e, '0.5');
});

nav.addEventListener('mouseout', function(e) {
    handleHover(e, '1');
});





/*
const h1 = document.querySelector('h1');
const alertH1 = () => {
    alert('Teste Mouseenter');

    h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);*/

/*h1.onmouseenter = () => {
    alert('Teste Onmouseenter');
};*/

//Filhos
/*
const h1 = document.querySelector('h1');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--color-secondary)';

console.log(h1.parentElement.children)*/

/* OPERATIONS */
 const tabs = document.querySelectorAll('.operations__tab');
 const tabsContainer = document.querySelector('.operations__tab-container');
 const tabsContat = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);

    /*Tratativa para quando clica no meio dos botões*/
    if(!clicked) return;

    
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContat.forEach(c => c.classList.remove('operations__content--active'));

    /*Ativa os Botões*/
    clicked.classList.add('operations__tab--active');

    /*Altera texto*/
    console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

