var button1 = document.querySelector('.button');

button1.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('active');
});
