const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.target.classList.toggle('active');
    });
});