const eleGrid = document.querySelector('.main-container');


for (let i = 1; i <= 100; i++) {
	const eleSq = document.createElement('div');
	eleSq.classList.add('sq');
	eleGrid.append(eleSq);
    eleSq.append([i]);

	eleSq.addEventListener('click', function () {
		this.classList.toggle('overlay')
	});
}

