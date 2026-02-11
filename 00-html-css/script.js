const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(button => {
            button.classList.add('is-applied');
            button.textContent = '¡Aplicado!';
            button.disabled = true;
        });
    });
});