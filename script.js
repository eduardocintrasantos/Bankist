const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')


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