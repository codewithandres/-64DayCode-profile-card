
document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.card-buttons button');
    const card = document.querySelector('.card');
    const sections = document.querySelectorAll('.card-section');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            [ ...buttons ].map(item => item.classList.remove('is-active'));
            [ ...sections ].flatMap(sec => sec.classList.remove('is-active'));

            btn.classList.add('is-active');

            btn.getAttribute('data-section') !== '#about'
                ? card.classList.add('is-active')
                : card.classList.remove('is-active');

            card.setAttribute('data-state', btn.getAttribute('data-section'));

            const section = document.querySelector(btn.getAttribute('data-section'));
            section.classList.add('is-active')
        });
    });
});
