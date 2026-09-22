const menuBtn = document.querySelector('.nav__toggle');
const menuBox = document.getElementById('mobile-menu');
const expanded = false 
menuBtn.addEventListener('click', () => {
    menuBox.classList.toggle('hidden');
    expanded = !expanded
    menuBtn.setAttribute('aria-expanded', expanded) 

});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {menuBox.classList.add('hidden');}
    expanded = false;
    menuBtn.setAttribute('aria-expanded', expanded);
});