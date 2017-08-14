
var Game = function(stringOfSixteen = ""){
	// this.board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  this.board = [[2,2,0,0],[0,0,2,0],[0,0,0,0],[0,4,0,4]] 
  if (stringOfSixteen.length == 16) {
    var position = 0
    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
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

// GENERATE RANDOME BOARD WITH 2 2's ////pick two different random positions and put a value of 2 in them //choose rand row and col since they are empty

Game.prototype.generateRandomBoard = function() {
  var row = Math.floor(Math.random() * 4)   var col = Math.floor(Math.random() * 4)
  firstTwo = this.board[row][col] = 2;
  do { 
    row = Math.floor(Math.random() * 4)
    col = Math.floor(Math.random() * 4)
  } 
  while (this.board[row][col] == 2) 
  this.board[row][col] = 2;

} 


// FILL WITH A TWO OR FOUR AFTER A MOVE //find all the zeros / get a random zero / fill with a two
Game.prototype.fill = function(){
  do { 
      var row = Math.floor(Math.random() * 4)
      var col = Math.floor(Math.random() * 4)
      } 
  while (this.board[row][col] >= 1)
    console.log(this.board[row][col]);
  this.board[row][col] = 2;
    console.log(this.board[row][col])
  }


// HTML FILLER
Game.prototype.htmlIfyer = function() {
  for (var row = 0; row < 4; row++) {
     for (var col = 0; col < 4; col++) {
       
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

// TO STRING
Game.prototype.toString = function() {
  return this.board[0].join("")+"\n"+this.board[1].join("")+"\n"+this.board[2].join("")+"\n"+this.board[3].join("")
}

// MOVE UP RIGHT DOWN LEFT
Game.prototype.move = function(direction) {
  if (direction === "left") {
    this.left()
  }
  else if (direction === "right") {
    this.right()
  }
  this.fill()
  this.htmlIfyer()
}
  
// Move left for a row, calls on rowleft 
Game.prototype.left = function() {
  for (var row = 0; row < 4; row++) {
    this.rowleft(this.board[row])
  }
}

Game.prototype.right = function() {
  for (var row = 0; row < 4; row++) {
    this.rowright(this.board[row])
  }
}

// Make row go left //move one col at a time
Game.prototype.rowleft = function(rowvalues) {
  
  var changed
  do {
    changed = false
    console.log("starting check")
    for (var i = 0; i < 3; i++) { //need a var infront of i here so it is NOT a global variable 
      if (rowvalues[i] == 0 && rowvalues[i+1] != 0) {
        rowvalues[i] = rowvalues[i+1]
        rowvalues[i + 1] = 0
        console.log("moved left at i = " + i)
        changed = true
      }
      else if (rowvalues[i] !=0 && rowvalues[i] == rowvalues[i+1]) {
        rowvalues[i] += rowvalues[i+1]
        rowvalues[i + 1] = 0
        console.log("merged left at    i = " + i)
        changed = true
      }
    }
  }
  while (changed)
}

// Make row go right move one col at a time
Game.prototype.rowright = function(rowvalues) {
  var changed
  do {
    changed = false
    console.log("starting check")
    for (var i = 3; i >= 0; i--) {
      if (rowvalues[i] == 0 && rowvalues[i-1] != 0) {
        rowvalues[i] = rowvalues[i-1]
        rowvalues[i - 1] = 0
        console.log("moved right at i = " - i)
        changed = true
      }
      else if (rowvalues[i] !=0 && rowvalues[i] == rowvalues[i-1]) {
        rowvalues[i] += rowvalues[i-1]
        rowvalues[i - 1] = 0
        console.log("merged right at    i = " - i)
        changed = true
      }
    }
  }
  while (changed)
}


// Game.prototype.newNumber = function() {
//   //scan the whole board for at least one empty cell
//   while (this.board[row][col] == 0) 
//   for (i = 0; i < 3; i++)
//     do { 
//       row = Math.floor(Math.random() * 4)
//       col = Math.floor(Math.random() * 4)
//     } 
//   while (this.board[row][col] == !0) 
//   this.board[row][col] = 2;
//   //choose random AND empty position
//   //choose a 2 or a 4 and stick in 
// }



//move every element as far as it will go 
//try to combine elements if you can by adding and merging them into one cell
//when done , add a new random 2 or 4 to the board. ft add just a two or four
  //for left and right just use row 
    //work one row at a time
    //make a row left function for just one row
  //for up and down just use col

//two constructors 
//one take no arguments
//one takes a string
// var Game = function() {
//   this.board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
//   this.startTiles = 2;
// }


// first psuedo
// update the board function
// add things function
// up move and functions check to add
// down  move and functions check to add
// right move and functions check to add
// left move and functions check to add
// check bottom for adding?
// 