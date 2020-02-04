function newBoggleBoard() {
  return [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
  ];
}

/**ls
 * Prints out a boggle board.
 */
function printBoggleBoard(boggleBoard) {
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
function shake(boggleBoard){
  let dice =  [
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


  ]
  for(let row of boggleBoard){
  for(let i = 0; i<boggleBoard.length;i++){
  let randomDice = Math.floor(Math.random() * 15);
  let randomLetter = Math.floor(Math.random() * 5);
  row[i]=dice[randomDice].combo[randomLetter];

  }
}
return boggleBoard;
}


let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);
