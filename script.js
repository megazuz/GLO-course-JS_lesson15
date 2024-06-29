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

document.addEventListener("DOMContentLoaded", newP.addToDom('#p1'));
document.addEventListener("DOMContentLoaded", newElem1.addToDom('.block'));

const toInt = function (str) {
    str = str + '';
    return parseInt(str.split(/\D/).join(''));
};

const movingBLock = document.querySelector('.block');
movingBLock.style.position = 'absolute';
movingBLock.style.top = '100px';
movingBLock.style.left = '300px';
console.log(movingBLock);

document.addEventListener('keydown', (event) => {
    const key = event.key;
    switch (key) {
        case 'ArrowUp': movingBLock.style.top = (toInt(movingBLock.style.top) - 10) + 'px'; break;
        case 'ArrowDown': movingBLock.style.top = (toInt(movingBLock.style.top) + 10) + 'px'; break;
        case 'ArrowLeft': movingBLock.style.left = (toInt(movingBLock.style.left) - 10) + 'px'; break;
        case 'ArrowRight': movingBLock.style.left = (toInt(movingBLock.style.left) + 10) + 'px'; break;
    }
});