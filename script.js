// Constantes e Variáveis
const colorPalette = document.querySelectorAll('.color');
const colorsClass = ['color-black', 'color-cyan', 'color-yellow', 'color-magenta'];
const colorsNames = ['black', 'cyan', 'yellow', 'magenta'];
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');
const buttonInputSize = document.getElementById('board-size');
const buttonGenerateBoard = document.getElementById('generate-board');
let defaultColor = colorsNames[0];

// Funções para definir qual cor foi selecionada pela pessoa usuária.
function removeSelectedColor() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
}

function addSelectedColor() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', () => {
      removeSelectedColor();
      defaultColor = colorPalette[index].style.backgroundColor;
      colorPalette[index].className = `color ${colorsClass[index]} selected`;
    });
  }
}

// Função que preenche o quadro quando a pessoa usuária clica no pixel desejado com a cor selecionada.
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

// Função que limpa o quadro tornando-o branco.
function clearBoard() {
  buttonClear.addEventListener('click', function(event) {
      for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
      }
    });
}

// Função auxiliar que remove o quadro para reconstruí-lo.
function removePixelBoard() {
  for (let index = pixelBoard.childNodes.length - 1; index >= 0; index -= 1) {
    pixelBoard.removeChild(pixelBoard.childNodes[index]);
  }
}

// Função que verifica se o valor inserido pela pessoa usuária para definir a àrea do quadro está entre 5 e 50.
function checkPixelBoardSize(size) {
  if (size) {
    let defaultSize = size;
    removePixelBoard();
    if (size < 5) {
      defaultSize = 5;
    } else if (size > 50) {
      defaultSize = 50;
    }
    return defaultSize;
  } else alert('Board inválido!');
}

// Funcção que adiciona o quadro de pixels de acordo com o tamanho estipulado pela pessoa usuária.
function addPixelBoard(size) {
  const boardSize = checkPixelBoardSize(size);
  for (let i = 0; i < boardSize; i += 1) {
    const pixelBlock = document.createElement('div');
    pixelBlock.className = 'pixel-block';
    pixelBoard.appendChild(pixelBlock);
    for (let j = 0; j < boardSize; j += 1) {
      const pixelBox = document.createElement('div');
      pixelBox.className = 'pixel';
      pixelBlock.appendChild(pixelBox);
    }
  }
}

function defineBoard() {
  addPixelBoard(buttonInputSize.value);
}

// Função que gera cor aleatória.
function generateRGBColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

// Função que gera três cores para a paleta apresentada à pessoa usuária.
function generateDinamicPalette() {
  colorPalette[0].style.backgroundColor = defaultColor;
  for (let index = 1; index < colorPalette.length; index += 1) {
    colorPalette[index].style.backgroundColor = generateRGBColors();
  }
}

// Execução das funções para gerar o código.
buttonGenerateBoard.addEventListener('click', defineBoard);
generateDinamicPalette();
addSelectedColor();
fillBoard();
clearBoard();