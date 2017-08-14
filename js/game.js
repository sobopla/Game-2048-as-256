//two constructors 
//one take no arguments
//one takes a string
// var Game = function() {
//   this.board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
//   this.startTiles = 2;
// }

var Game = function(stringOfSixteen = ""){
	this.board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  if (stringOfSixteen.length == 16) {
    var position = 0
    for ( row = 0; row < 4; row++) {
      for ( col = 0; col < 4; col++) {
        this.board[row][col] = stringOfSixteen.substr(position, 1);
        ++position;
      }
    }
  }
  // initialize a random board if no string is passed in 
  else { 
    this.generateRandomBoard()
  }
  this.htmlIfyer()
}

// method to generate random board with 2 2
Game.prototype.generateRandomBoard = function() {
  //pick two different random positions and put a value of 2 in them
  var row = Math.floor(Math.random() * 4) //choose rand row and col since they are empty
  var col = Math.floor(Math.random() * 4)
  this.board[row][col] = 2;
  // check if 2 already exists before placing second 2
  do { 
    row = Math.floor(Math.random() * 4)
    col = Math.floor(Math.random() * 4)
  } 
  while (this.board[row][col] == 2) 
  this.board[row][col] = 2;
}


// method to fill html with correlating cells
Game.prototype.htmlIfyer = function() {
  for ( row = 0; row < 4; row++) {
     for ( col = 0; col < 4; col++) {
       
       // $('.row' + row + '-col' + col).text(this.board[row][col])
       if (this.board[row][col] == 0) {
          $(`.row${row}-col${col}`).text("[]")
       }
       else {
          $(`.row${row}-col${col}`).text(this.board[row][col])
      }
    }
  }
}

// To String method for printing
Game.prototype.toString = function() {
  return this.board[0].join("")+"\n"+this.board[1].join("")+"\n"+this.board[2].join("")+"\n"+this.board[3].join("")
}

Game.prototype.move = function(direction) {
  if (direction === "left") {
    this.left()
    //not finished
  }
  this.htmlIfyer()
}
  
Game.prototype.left = function() {
  for (row = 0; row < 4; row++) {
    this.rowleft(this.board[row])
  }
}

Game.prototype.rowleft = function(rowvalues) {
  //move one row at a time
  rowvalues[0] = 1
}


//move every element as far as it will go 
//try to combine elements if you can by adding and merging them into one cell
//when done , add a new random 2 or 4 to the board. ft add just a two or four
  //for left and right just use row 
    //work one row at a time
    //make a row left function for just one row
  //for up and down just use col





// update the board function
// add things function
// up move and functions check to add
// down  move and functions check to add
// right move and functions check to add
//  left move and functions check to add
// check bottom for adding?
// 