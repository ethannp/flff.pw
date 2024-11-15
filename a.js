let s = document.createElement("style");
s.textContent = `
@font-face {
  font-family: 'MyCustomFont';
  src: url('//flff.pw/AmongUs-Regular.ttf') format('truetype');
}

html {
    background-image: url('//flff.pw/b.gif');
    background-size: 15% 150px;
    background-repeat: repeat-all;
    font-family: 'MyCustomFont', sans-serif;
    text-transform: uppercase;
}`
document.head.appendChild(s);



var iframe = document.createElement('iframe');
iframe.width = "50%";
iframe.height = "315";
iframe.src = "https://www.youtube.com/embed/z6RJVE0HOv4?autoplay=1";
iframe.frameBorder = "0";
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.allowFullscreen = false;
document.body.insertBefore(iframe, document.body.firstChild);




let div = document.createElement('div');

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





var old_element = document.getElementById("play-again-button");
var new_element = old_element.cloneNode(true);
old_element.parentNode.replaceChild(new_element, old_element);

function embedWebpage() {
  document.body.insertBefore(
    Object.assign(document.createElement('iframe'), {
      src: "https://texnique.xyz",
      width: "75%",
      height: "500px",
      style: { border: "none" }
    }),
    document.body.lastElementChild
  );
}

new_element.addEventListener("click", embedWebpage);
