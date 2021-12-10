const elementMain = document.getElementsByTagName('main')[0];
console.log(elementMain);

const elementHeader = document.getElementsByTagName('header')[0];
const elementH1 = document.createElement('h1');
elementH1.innerHTML = 'Paleta de Cores';
elementH1.id = 'title';
elementHeader.appendChild(elementH1);

// Sections
const sectionIds = ['color-palette', 'pixel-board'];
function addTagSection(array) {
  for (let index = 0; index < array.length; index += 1) {
    const elementSection = document.createElement('section');
    elementSection.id = array[index];
    elementMain.appendChild(elementSection);
  }
}
addTagSection(sectionIds);

// Divs - Class: color
const colorClassName = ['color', 'color-black', 'color-cyan', 'color-yellow', 'color-magenta'];
function addDivClassColor(array) {
  for (let index = 1; index < array.length; index += 1) {
    const elementDiv = document.createElement('div');
    const elementIdColorPalette = document.getElementById('color-palette');

    if (array[index] === 'color-black') {
      elementDiv.className = `${array[0]}${elementDiv.className} ${array[index]} selected`;
    } else if (index > 0) {
      elementDiv.className = `${array[0]}${elementDiv.className} ${array[index]}`;
    }

    elementIdColorPalette.appendChild(elementDiv);
  }
}
addDivClassColor(colorClassName);

// Divs - Class: pixel
const classPixel = 'pixel';
const width = 5;
const height = 5;

function addDivClassPixel() {
  for (let i = 0; i < width; i += 1) {
    const elementIdPixelBoard = document.getElementById('pixel-board');
    for (let j = 0; j < height; j += 1) {
      const elementDiv = document.createElement('div');
      elementDiv.className = `${classPixel}`;
      elementIdPixelBoard.appendChild(elementDiv);
    }
    const elementBr = document.createElement('br');
    elementIdPixelBoard.appendChild(elementBr);
  }
}
addDivClassPixel();

// Funções
const colorPalette = document.getElementById('color-palette');
//const pixelBoard = document.getElementById('pixel-board');

function eventSelected(event) {
  const elementColor = event.target;
  if (elementColor.classList.contains('color')) {
    const color = document.getElementsByClassName('selected')[0];
    color.classList.remove('selected');
    elementColor.classList.add('selected');
  }
}

colorPalette.addEventListener('click', eventSelected);