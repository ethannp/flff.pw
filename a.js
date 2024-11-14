let s = document.createElement("style");
s.textContent = `
html {
    background-image: url('//flff.pw/b.gif');
    background-size: 30% 150px;
    background-repeat: repeat-all;
}`
document.head.appendChild(s);

let div = document.createElement('div');
let text = document.createTextNode('amogus');
div.appendChild(text);

div.style.fontFamily = 'Comic Sans MS';
div.style.fontSize = '20pt';
div.style.color = 'yellow';
div.style.backgroundColor = 'purple';
div.style.border = '5px solid limegreen'; // Barf green color

document.body.appendChild(div);

