


// --------------------------------



// script.js
document.addEventListener('DOMContentLoaded', function() {
	const content = document.querySelector('.main__content');
	const body = document.querySelector('.main__body');

	function getRandomPosition() {
	const maxX = body.clientWidth - content.clientWidth;
	const maxY = body.clientHeight - content.clientHeight;

	  const randomX = Math.floor(Math.random() * maxX);
	  const randomY = Math.floor(Math.random() * maxY);

	return { x: randomX, y: randomY };
	}

	function moveContent() {
	const newPosition = getRandomPosition();

	content.style.left = newPosition.x + 'px';
	content.style.top = newPosition.y + 'px';

	requestAnimationFrame(moveContent);
	}

	moveContent();
});
