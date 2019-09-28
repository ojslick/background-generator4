const css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById("gradient");
let btn = document.querySelector('button')

const setGradient = () => {
  body.style.background =
  "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value + ")";
  css.textContent = body.style.background + ";"
}

window.onload = () => {
  body.style.background =
  "linear-gradient(to right, " 
  + color1.value
  + ", " 
  + color2.value + ")";
  css.textContent = body.style.background + ";"
}


const generateNumbers = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color)
  return color; 
}

generateNumbers()


const generateColors = () => {
  color1.value = generateNumbers()
  color2.value = generateNumbers()
  body.style.background =
  "linear-gradient(to right, " 
  + generateNumbers
  + ", " 
  + generateNumbers + ")";
  console.log(body.style.background)
}

generateColors()

btn.addEventListener("click", generateColors);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);