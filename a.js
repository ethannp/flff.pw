let s = document.createElement("style");
s.textContent = `
html {
    background-image: url('//flff.pw/b.gif');
    background-size: 15% 150px;
    background-repeat: repeat-all;
}`
document.head.appendChild(s);

let div = document.createElement('div');

div.style.fontFamily = 'Comic Sans MS';
div.style.color = 'yellow';
div.style.backgroundColor = 'purple';
div.style.border = '5px solid limegreen'; // Barf green color

fetch('https://flff.pw/candp.html')
    .then(r => {return r.text();})
    .then(r => {
        const t = document.createElement('div');
        div.innerHTML = r;
    })

document.body.appendChild(div);
