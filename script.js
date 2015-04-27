var board = [
      [0, 0, 0, 1, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0],
      [0, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [1, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 1, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 1, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [0, 1, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1],
      [1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
      ];
var cells =[];
var interval = null;
var offset = 4300;
var ship_x = board[0].length*25-25;
var ship_y = board.length*50-(offset + 50);
var shift = 0;
var score = 0;
var movements = 0;
$( document ).ready(function(){
  //Button to start the game
  $( '.button' ).click(function(){
    //Remove the button and descriptions to start the game
    $('.button').remove();
    $('h1').remove();
    $('p').remove();

    insertBoard();
    insertPieces();
    animateGame();
    moveShip();
  });
});

function moveShip(){
   $('#game').append($("<img id='ship' src='kevin1.png' />"));
    $('#ship').css('left', ship_x+'px');
    $('#ship').css('top', ship_y+'px');
    $(document).keydown(function(e) {
      if(e.keyCode==37 && ship_x != 0) {
        ship_x -= 50;
        movements += 1;
      } else if(e.keyCode == 39 && ship_x != (board[0].length-1)*50) {
        ship_x += 50;
        movements += 1;
      }
      $('#ship').css('left', ship_x+'px');
    });
}
function insertBoard(){
  $('#game').append($("<div id='board'></div>"));
      $('#board').width(board[0].length*50);
      $('#board').height(board.length*50-offset);
}
function insertPieces(){
  for(var y=0; y<board.length; y++)
  {
    for(var x=0; x<board[y].length;x++)
    {
      if(board[y][x] == 1)
      {
        var temp = $("<img class='boardcell' src='kevin2.png'></img>");
        temp.css('left', 50*x+'px');
        temp.css('top',50*y-offset+shift*7+'px')
        cells.push(temp);
        $('#board').append(temp);
      }
    }
  }
}
function animateGame(){
  var milliseconds = new Date().getTime();
  $("body").append("<div id='score'></div>");
  interval = setInterval(function() {
    shift += 1;
    for(var i = 0; i < cells.length ; i++) {
      score = Math.floor((new Date().getTime() - milliseconds)/1000);
      $("#score").html("Score: " + score);
      $("#numMoves").html("This many moves:" + movements);
      //shifts each of the blocks up by 7 at each reset
      // cells[i].css('top',cells[i].position().top+7+'px');
      cells[i].css('top',cells[i].position().top+7+'px');
      if(cells[i].position().top - ship_y > -49
        &&cells[i].position().left == ship_x) {
        clearInterval(interval);
        $('#game').remove();
        $('#moves').val(movements);
        $('#cents').val(score);
        alert("You earned " + score + " points!");
      }
      // remove the blocks that move past the character
      if(cells[i].position().top - ship_y > 2){
        cells[i].remove();
        if(i == 0 || score > 200) {
          clearInterval(interval);
          $('#game').remove();
          $('#cents').val(score);
          $('#moves').val(movements);
          alert("You earned " + score + " points!");
        }
      }
    }
  }, 50);
}