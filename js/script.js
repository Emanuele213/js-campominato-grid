const eleGrid = document.querySelector('.main-container');
const eleSend = document.querySelector('.mod-btn'); 
const difficulty = document.querySelector('#difficolta');

eleSend.addEventListener('click', function () { 
    const eleDifficulty = difficulty.value;
    eleGrid.replaceChildren();
if (eleDifficulty == 'easy') {
    for (let i = 1; i <= 100; i++) {
        const eleSq = document.createElement('div');
        eleSq.classList.add('sq');
        eleGrid.append(eleSq);
        eleSq.append([i]);

        eleSq.addEventListener('click', function () {
            this.classList.toggle('overlay')
        });
    }
}else if (eleDifficulty == 'hard') {
    for (let i = 1; i <= 81; i++) {
        const eleSq = document.createElement('div');
        eleSq.classList.add('sq', 'small');
        eleGrid.append(eleSq);
        eleSq.append([i]);
        

        eleSq.addEventListener('click', function () {
            this.classList.toggle('overlay')
        });
    }
}else if (eleDifficulty == 'crazy') {
    for (let i = 1; i <= 49; i++) {
        const eleSq = document.createElement('div');
        eleSq.classList.add('sq', 'crazy');
        eleGrid.append(eleSq);
        eleSq.append([i]);
        
        
        eleSq.addEventListener('click', function () {
            this.classList.toggle('overlay')
        });
    }
}
});