let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  // console.log(e.keyCode, e.which);

  //38 w gorę
  //40 w dół

  if (e.keyCode === 38) {
    if (red < 255) {
      red += 3;
      green += 3;
      blue += 3;
    }
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  else if (e.keyCode === 40) {
    if (red >= 0) {
      red -= 3;
      green -= 3;
      blue -= 3;
    }
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

window.addEventListener('keydown', changeColor);