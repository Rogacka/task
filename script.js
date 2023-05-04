'use strict';

confirm(`Щоб рухатись по полю виристовуйте кнопки або стрілки на клавіатурі`);

let pin = document.getElementById('pin');
console.log(pin);

let moveUp = document.querySelector('.top');
console.log(moveUp);
let bottom = document.querySelector('.bottom');
console.log(bottom);
let left = document.querySelector('.left');
console.log(left);
let right = document.querySelector('.right');
console.log(right);

const verticalColours = ['#E39FF6', '#FE7D6A', '#6F2DA8', '#FFD700', '#601A35', '#FE7D6A', '#FF00FF', '	#F26B8A', '#FC4C4E', '#FFC0CB'];
const horisontColours = ['#F28500', '#FFA500', '#FFBF00', '#FFBF34', '#AB0B23', '#E66A35', '#8A624A', '#DFFF00', '#D8B863', '#3DED97'];


let pinTop = 50;
let pinLeft = 50;
function movePin(step) {
    switch (step) {
        case 38:
            pinTop -= 100;
            moveUp.classList.add('inPress');
            break;
        case 40:
            pinTop += 100;
            bottom.classList.add('inPress');
            break;
        case 37:
            pinLeft -= 100;
            left.classList.add('inPress');
            break;
        case 39:
            pinLeft += 100;
            right.classList.add('inPress');
            break;
    }

    if (pinTop) {
        if (pinTop > 0 && pinTop < 500) {
            pin.style.top = `${pinTop}px`;
            let colUp = verticalColours[Math.floor(Math.random()*10)];
            pin.style.background = `${colUp}`;
            console.log(pinTop);
        } else if (pinTop <= 50) {
            pinTop = 50;
            console.log(pinTop);
            alert(`Далі рухатись неможна`);
        } else if (pinTop >= 450) {
            pinTop = 450;
            console.log(pinTop);
            alert(`Далі рухатись неможна`);
        }
    }
    if (pinLeft) {
        if (pinLeft > 0 && pinLeft < 500) {
            pin.style.left = `${pinLeft}px`;
            let col = horisontColours[Math.floor(Math.random()*10)];
            pin.style.background = `${col}`;
            console.log(pinLeft);
        } else if (pinLeft <= 50) {
            pinLeft = 50;
            console.log(pinLeft);
            alert(`Далі рухатись неможна`);
        } else if (pinLeft >= 450) {
            pinLeft = 450;
            console.log(pinLeft);
            alert(`Далі рухатись неможна`);
        }
    }
}

function removeInPress(el) {
    if (el.propertyName !== 'transform') return;
    this.classList.remove('inPress');
}

const presses = document.querySelectorAll('.pres');
presses.forEach(pres => pres.addEventListener('transitionend', removeInPress));


window.addEventListener('keydown', function(s){
    console.log(s.keyCode);
    const step = this.document.querySelector(`[data-key= "${s.keyCode}"]`);
    if (step) {
        movePin(s.keyCode);
    } else {
        return;
    };
});

