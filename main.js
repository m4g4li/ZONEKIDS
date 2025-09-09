let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-bars'); // quita/añade las 3 rayas
    menuBtn.classList.toggle('fa-times'); // pone/quita la X
}