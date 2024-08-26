const body = document.body;

const buttonBackgroundChange = document.querySelector('#button-background-change');
const buttonAlert = document.querySelector('#button-alert');
const buttonDoNotClick = document.querySelector('#button-do-not-click');
const buttonRotate = document.querySelector('#button-rotate');
const buttonCat = document.querySelector('#button-cat');
const buttonBlur = document.querySelector('#button-blur');
const buttonGiveUp = document.querySelector('#button-give-up');
const buttonDelete = document.querySelector('#button-delete');
const buttonRound = document.querySelector('#button-round');
const buttonSquare = document.querySelector('#button-square');

let rotationInterval = null;

buttonBackgroundChange.addEventListener('click', colorChange);
buttonAlert.addEventListener('click', showAlert);
buttonDoNotClick.addEventListener('mouseover', runAway);
buttonRotate.addEventListener('click', rotateBody);
buttonCat.addEventListener('click', addCat);
buttonBlur.addEventListener('click', toggleBlur);
buttonGiveUp.addEventListener('click', giveUp);
buttonDelete.addEventListener('click', deleteMe);
buttonRound.addEventListener('click', round);
buttonSquare.addEventListener('click', square);


function colorChange() {
    const randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
    body.style.backgroundColor = randomColor;
}

function showAlert() {
    alert('Hello World!');
}

function runAway() {
    const maxRange = 300;
    const randomX = Math.round(Math.random() * maxRange);
    const randomY = Math.round(Math.random() * maxRange);

    buttonDoNotClick.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function rotateBody() {

    clearInterval(rotationInterval);
    body.style.transform = 'rotate(0turn)';
    body.style.transformOrigin = '50vw 50vh';

    rotationInterval = setInterval(function () {
        let turn = Number(body.style.transform.match(/[0-9.]+/g)) ?? 0;

        console.log(turn);
        
        if (turn === Math.round(turn) && turn !== 0) {
            clearInterval(rotationInterval);
            body.style.transform = 'rotate(0turn)';
        } else {
            body.style.transform = `rotate(${turn + 0.01}turn)`;
        }
    }, 16);
}

function addCat() {
    const image = document.createElement('img');

    image.src = 'https://cataas.com/cat';
    image.width = 80;

    body.appendChild(image);
}

function toggleBlur() {
    body.style.filter = body.style.filter === 'blur(3px)' ? '' : 'blur(3px)';
}

function giveUp() {
    const iframe = document.createElement('iframe');

    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin'
    iframe.src = 'https://www.youtube.com/embed/E4WlUXrJgy4?si=RRdkYTk6wTLkDMMU&controls=0&autoplay=1';

    body.appendChild(iframe);
}

function deleteMe(event) {
    event.target.parentNode.removeChild(event.target);
}

function round() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.style.borderRadius = '100%');
}

function square() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.style.borderRadius = '0');
}





