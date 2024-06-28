'use strict';

const DomElement = function (selector = '.block', width = '100%', height = '20px', bg = '', fontSize = '') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.addToDom = function () {
        if (selector[0] === '.') {
            const newDiv = document.createElement('div');
            newDiv.className = selector.substring(1);
            newDiv.style.cssText = `
height: ${height};
width: ${width};
bg: ${bg};
font-size: ${fontSize};
`
            newDiv.textContent = 'Новый пустой div с классом = ' + selector.substring(1);
            document.body.append(newDiv);
        };
        if (selector[0] === '#') {
            const newP = document.createElement('p');
            newP.id = selector.substring(1);
            newP.style.cssText = `
height: ${height};
width: ${width};
bg: ${bg};
font-size: ${fontSize};
`
            newP.textContent = 'Новый абзац с текстом и с идентификатором = ' + selector.substring(1);
            document.body.append(newP);
        };
    };
};

const newElem1 = new DomElement('.block', '80%', '100px', '', '16px');
newElem1.addToDom();
const newElem2 = new DomElement('#p1', '80%', '100px', '', '16px');
newElem2.addToDom();