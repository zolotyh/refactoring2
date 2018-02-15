var buttonList = {
    mainButton: document.querySelector('.button')
};



buttonList.mainButton.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('active');
});
