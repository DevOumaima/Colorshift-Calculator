

function seven() {
    let screen = document.querySelector('.screen');
    screen.value += '7';
}

function eight() {
    let screen = document.querySelector('.screen');
    screen.value += '8';
}

function nine() {
    let screen = document.querySelector('.screen');
    screen.value += '9';
}

function plus() {
    let screen = document.querySelector('.screen');
    screen.value += '+';
}

function four() {
    let screen = document.querySelector('.screen');
    screen.value += '4';
}

function five() {
    let screen = document.querySelector('.screen');
    screen.value += '5';
}

function six() {
    let screen = document.querySelector('.screen');
    screen.value += '6';
}

function minus() {
    let screen = document.querySelector('.screen');
    screen.value += '-';
}

function one() {
    let screen = document.querySelector('.screen');
    screen.value += '1';  
}

function two() {
    let screen = document.querySelector('.screen');
    screen.value += '2';
}

function three() {
    let screen = document.querySelector('.screen');
    screen.value += '3';
}

function fi() {
    let screen = document.querySelector('.screen');
    screen.value += '*';
}

function sefr() {
    let screen = document.querySelector('.screen');
    screen.value += '0';
}

function point() {
    let screen = document.querySelector('.screen');
    screen.value += '.';
}

function kisma() {
    let screen = document.querySelector('.screen');
    screen.value += '/';
}

function is() {
    let screen = document.querySelector('.screen');
    screen.value = eval(screen.value);
}

function clEEar() {
    let screen = document.querySelector('.screen');
    if (screen.value.length > 0) {  
        screen.value = screen.value.toString().slice(0, -1);
    }
}

function clErAll() {
    let screen = document.querySelector('.screen');
    screen.value = '';
}

function changeColor() {
    let bUTONE = document.getElementById('changement');
    let box1 = document.querySelector('.Calculator');
    let box2 = document.querySelector('.buttoins');
    let box3 = document.querySelector('button');
    let btns = document.querySelector('.btn');

    if (btns.innerHTML === 'vert') {
        bUTONE.innerHTML = 'blue';
        btns.style.background = '#000016';
        box1.style.background = '#041c6d';
        box3.style.background = '#173F5F';
        box2.style.background = '#85a0f8';
    } else if (bUTONE.innerHTML === 'blue') {
        bUTONE.innerHTML = 'rose';
        btns.style.background = '#041c6d';
        box1.style.background = '#E8175D';
        box3.style.background = '#C72C41';
        box2.style.background = '#FFAAA6';
    } else {
        bUTONE.innerHTML = 'vert';
        btns.style.background = '#073B3A';
        box1.style.background = '#428C8B';
        box3.style.background = '#0A5C36';
        box2.style.background = '#9DE0AD';
    }
}