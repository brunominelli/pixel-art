const colorPalette = document.querySelectorAll('.color');
const colorsClass = ['color-black', 'color-cyan', 'color-yellow', 'color-magenta'];
const colorsNames = ['black', 'cyan', 'yellow', 'magenta'];
//console.log(colorPalette);
let defaultColor = colorsNames[0];

for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].style.backgroundColor = colorsClass[index];
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
}

function addSelected() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', () => {
      removeSelected();
      defaultColor = colorsNames[index];
      colorPalette[index].className = `color ${colorsClass[index]} selected`;
      console.log(defaultColor);
    });
  }
   
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('pixel')) {
    for (let index = 0; index <= colorsNames.length; index += 1) {
      if (event.target.style.backgroundColor !== colorsNames[index]) {
        event.target.style.backgroundColor = defaultColor;
      } else event.target.style.backgroundColor = 'white';
    }
  }
});


addSelected();
//fillPixel();