﻿var input = document.getElementById('input');

function button(obj) {

    var pushed = obj.innerHTML;

    if (pushed == '=') {
        input.innerHTML = eval(input.innerHTML);
    }
    else if (pushed == 'AC') {
        input.innerHTML = '0';
    }
    else {
        if (input.innerHTML == '0') {
            input.innerHTML = pushed;
        }
        else {
            input.innerHTML += pushed;
        }
    }
}