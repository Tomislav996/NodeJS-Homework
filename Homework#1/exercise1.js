let body = document.getElementsByTagName(`body`)[0];

let paragraph = document.getElementsByTagName(`p`)[0];

let randomColor = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(60, 179, 113)", "rgb(238, 130, 238)", "rgb(255, 165, 0)","rgb(106, 90, 205)", "rgb(255, 99, 71)"];



function randomPicker(element) {
    let randomRGB  = randomColor[Math.floor(Math.random() * randomColor.length)];
    element.innerText= `the current RGB value of the color is: ${randomRGB}`;
    return randomRGB;
  }


body.style.backgroundColor = randomPicker(paragraph);

