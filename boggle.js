// import { strict } from "assert";
let process = require('process');
const fs = require('fs');
let dictionary = process.argv[2];
let dict = {};
var text = fs.readFileSync(dictionary, 'utf-8');
let marked = [

  ['_', '_', '_', '_'],
  ['_', '_', '_', '_'],
  ['_', '_', '_', '_'],
  ['_', '_', '_', '_'],
];
let string = text.toUpperCase().split(/\s*\b\s*/);
for (let word of string) {
  if (!dict.hasOwnProperty(word)) {
    dict[word] = 1;
  }
}
function newBoggleBoard() {
  return [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
  ];
}
function printBoggleBoard(boggleBoard) {
  let isQ = false;
  for (let i = 0; i < boggleBoard.length; i++) {
    for (let j = 0; j < boggleBoard[i].length; j++) {
      if (boggleBoard[i][j] === 'Q') {
        boggleBoard[i][j] = 'Qu';
        isQ = true;
      }
    }
  }

  if (isQ === true) {
    for (let i = 0; i < boggleBoard.length; i++) {
      for (let j = 0; j < boggleBoard[i].length; j++) {
        boggleBoard[i][j] = boggleBoard[i][j].padEnd(2);
      }
    }
  }
  for (let row of boggleBoard) {
    console.log(row.join(' '));
  }
}

// function shake(boggleBoard) {
// let abc = 'abcdefghijklmnopqrstuvwxyz';
//   for(let row of boggleBoard){
//     for(let i = 0; i < boggleBoard.length; i++){
//       row[i] = abc[Math.floor(Math.random()*26)];
//     }

//   }
//   return boggleBoard;

// }
function shake (boggleBoard) {
  let dice = [
    {
      combo: 'AAEEGN',
    },
    {
      combo: 'ELRTTY',
    },
    {
      combo: 'AOOTTW',
    },
    {
      combo: 'ABBJOO',
    },
    {
      combo: 'EHRTVW',
    },
    {
      combo: 'CIMOTU',
    },
    {
      combo: 'DISTTY',
    },
    {
      combo: 'EIOSST',
    },
    {
      combo: 'DELRVY',
    },
    {
      combo: 'ACHOPS',
    },
    {
      combo: 'HIMNQU',
    },
    {
      combo: 'EEINSU',
    },
    {
      combo: 'EEGHNW',
    },
    {
      combo: 'AFFKPS',
    },
    {
      combo: 'HLNNRZ',
    },
    {
      combo: 'DEILRX',
    },

  ];
  for (let row of boggleBoard) {
    for (let i = 0; i < boggleBoard.length; i++) {
      let randomDice = Math.floor(Math.random() * 15);
      let randomLetter = Math.floor(Math.random() * 5);
      row[i] = dice[randomDice].combo[randomLetter];
    }
  }
  return boggleBoard;
}

function boardCheck() {
  let array = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let str = '';
      marked[i][j] = true;
      explore(board, marked, i, j, str, array);
      marked[i][j] = false;
    }
  }
  return array;
}

function explore(board, marked, row, col, str, array) {
  str += board[row][col];
  if (str.length >= 3 & dict.hasOwnProperty(str)) {
    array.push(str);
  }
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i >= 0 && j >= 0 && i < 4 && j < 4 && !marked[i][j]) {
        marked[i][j] = true;
        explore(board, marked, i, j, str, array);
        marked[i][j] = false;
      }
    }
  }
}
let board = newBoggleBoard();

printBoggleBoard(board);

shake(board);

printBoggleBoard(board);

console.log(boardCheck());
