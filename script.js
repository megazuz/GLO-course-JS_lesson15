'use strict';

const DomElement = function (selector) {
    this.selector = selector;
    this.height = '';
    this.width = '';
    this.bg = '';
    this.fontSize = '';
    this.addToDom = function (selector) {
        if (selector[0] === '.') {
            const newElem = document.createElement('div');
            newElem.className = selector.substring(1);
            newElem.textContent = 'Пустой ' + selector.substring(1);
            newElem.style.cssText = `height: ${this.height};
width: ${this.width};
background: ${this.bg};
font-size: ${this.fontSize};`;
            document.body.appendChild(newElem);
        };
        if (selector[0] === '#') {
            const newElem = document.createElement('p');
            newElem.id = selector.substring(1);
            newElem.textContent = 'Новый абзац с текстом и с идентификатором = ' + selector.substring(1);
            newElem.style.cssText = `height: ${this.height};
width: ${this.width};
background: ${this.bg};
font-size: ${this.fontSize};`;
            document.body.appendChild(newElem);
        };
    };
};
const newP = new DomElement;
newP.height = '20px';
newP.bg = 'brown';
const newElem1 = new DomElement;
newElem1.width = '100px';
newElem1.height = '100px';
newElem1.bg = 'green';
newElem1.position = 'absolute';

document.addEventListener("DOMContentLoaded", newP.addToDom('#p1'));
document.addEventListener("DOMContentLoaded", newElem1.addToDom('.block'));

const toInt = function (str) { return parseInt(str.split(/\D/).join('')) };
const nodeMove = function (text, step = 10, max = 1000, min = 0) {
    text = (toInt(text) + toInt(step));
    (text < toInt(min)) ? text = 0 : {};
    (text > toInt(max)) ? text = max : {};
    return toString(text) + 'px';
};

const newChild = document.createElement('div');
newChild.textContent = 'Новая нода';
newChild.style.background = 'red';
newChild.style.width = '100px';
newChild.style.height = '100px';
newChild.style.textAlign = 'center';
newChild.style.position = 'absolute';
newChild.style.top = '10px';
newChild.style.left = '500px'
document.addEventListener('keydown', (event) => {
    const key = event.key;
    switch (key) {
        case 'ArrowUp': newChild.style.top = nodeMove(newChild.style.top, -10); break;
        case 'ArrowDown': newChild.style.top = nodeMove(newChild.style.top, 10, 500); break;
        case 'ArrowLeft': newChild.style.left = nodeMove(newChild.style.left, -10); break;
        case 'ArrowRight': newChild.style.left = nodeMove(newChild.style.left, 10, 1000); break;
    }
});
document.body.appendChild(newChild);


console.log(newP);
console.log(newElem1);
console.log(newChild);

