let starPositionId: number;
let draggedElement: HTMLElement;

export function createElement(
  node: HTMLElement,
  tagName: string,
  id?: string,
  className?: string,

  textContent?: string
) {
  const element = document.createElement(tagName);
  element.id = id || '';
  element.classList.add(className || '');
  element.textContent = textContent || '';
  node.append(element);
  return element;
}

export function createBoard(startPieces: string[], node: HTMLElement) {
  startPieces.forEach((startPiece, i) => {
    const square = createElement(node, 'div', `square_${i}`, 'square');
    square.innerHTML = startPiece;

    const firstChild = square.firstChild as HTMLElement;
    if (firstChild) {
      firstChild.setAttribute('draggable', true);
    }

    const row = Math.floor((63 - i) / 8) + 1;
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? 'grey' : 'purple');
    } else {
      square.classList.add(i % 2 === 0 ? 'purple' : 'grey');
    }

    const svgPath = document.getElementsByTagName('path');
    if (i <= 15) {
      for (let j = 0; j < svgPath.length; j++) {
        svgPath[j].setAttribute('fill', 'black');
      }
    }
    if (i >= 48) {
      for (let j = 16; j < svgPath.length; j++) {
        svgPath[j].setAttribute('fill', 'rgb(245, 245, 245)');
      }
    }
    chessMove();
    node.append(square);
  });
}

function dragStart(e) {
  starPositionId = e.target.parentNode.getAttribute('id');
  draggedElement = e.target;
  console.log(draggedElement);
  console.log(starPositionId);
}
function dragOver(e) {
  e.preventDefault();
}
function dragDrop(e) {
  e.stopPropagation();
  e.target.append(draggedElement);
}

function chessMove() {
  const allSquares = document.querySelectorAll('#gameboard .square');

  allSquares.forEach((square) => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);
  });
}
