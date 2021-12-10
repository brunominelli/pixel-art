const colorPalette = document.querySelectorAll('.color');
const colorsClass = ['color-black', 'color-cyan', 'color-yellow', 'color-magenta'];
const colorsNames = ['black', 'cyan', 'yellow', 'magenta'];
const buttonClear = document.getElementById('clear-board');
//console.log(colorPalette);
let defaultColor = colorsNames[0];

for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].style.backgroundColor = colorsClass[index];
}

function removeSelectedColor() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
}

function addSelectedColor() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', () => {
      removeSelectedColor();
      defaultColor = colorsNames[index];
      colorPalette[index].className = `color ${colorsClass[index]} selected`;
      console.log(defaultColor);
    });
  }
   
}

function fillBoard() {
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('pixel')) {
      for (let index = 0; index <= colorsNames.length; index += 1) {
        if (event.target.style.backgroundColor !== colorsNames[index]) {
          event.target.style.backgroundColor = defaultColor;
        } else event.target.style.backgroundColor = 'white';
      }
    }
  });
}

function clearBoard() {
  buttonClear.addEventListener('click', function(event) {
    const pixel = document.getElementsByClassName('pixel');
      for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = 'white';
      }
    });
}

addSelectedColor();
fillBoard();
clearBoard();