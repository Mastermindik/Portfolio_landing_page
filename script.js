const btn = document.getElementById('burger-btn');
const menu = document.getElementById('menu');
const toggleTop = document.getElementById('top');
const toggleMid = document.getElementById('mid');
const toggleBttm = document.getElementById('bttm');
const list = document.querySelector('.menu .list')
/* function toggler() {
    menu.classList.toggle('burger-menu_active');
} */            
/* btn.addEventListener('click', function() {
    if (btn.className === 'burger-btn active') {
        menu.style.top = ``;
        toggleTop.style.transform = ``;
        toggleMid.style.width = ``;
        toggleBttm.style.transform = ``;
    } else {
        menu.style.top = `80px`;
        toggleTop.style.transform = `rotate(-45deg)`;
        toggleMid.style.width = `0`;
        toggleBttm.style.transform = `rotate(45deg)`;
    }
    btn.classList.toggle('active');
}); */

btn.onclick = () => {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    if (!btn.classList.contains('active')) {
        toggleTop.style.transform = ``;
        toggleMid.style.width = ``;
        toggleBttm.style.transform = ``;
    } else {
        toggleTop.style.transform = `rotate(-42deg)`;
        toggleMid.style.width = `0`;
        toggleBttm.style.transform = `rotate(42deg)`;
    }
}
list.onclick = e => {
    for (const i of document.querySelectorAll('.menu .list li a')) {
        i.classList.remove('active')
    }
    e.target.classList.add('active');
}
