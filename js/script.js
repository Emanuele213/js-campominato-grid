const show = document.querySelector('.main-container');

for (let i = 1; i <= 100; i++) {
    const element = `<div class="sq">${i}</div>`;
        show.innerHTML += element;
};