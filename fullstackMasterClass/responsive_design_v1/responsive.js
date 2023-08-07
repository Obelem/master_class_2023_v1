let hamMenuBtn = document.querySelector('.ham-menu-btn');
let navCard = document.querySelector('.nav-card');
let closeBtn = document.querySelector('.close-btn');

hamMenuBtn.addEventListener('click', function() {
    navCard.classList.add('slide');
});

closeBtn.addEventListener('click', function() {
    navCard.classList.remove('slide');
})
