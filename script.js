var interval = null;
$( document ).ready(function(){
  var board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1]
    ];

    //insert and create board
    $('body').append($("<div id='board'></div>"));
    $('#board').width(board[0].length*50);
    $('#board').height(board.length*50);

    //insert pieces
    var cells =[];
    for(var y=0; y<board.length; y++)
    {
      for(var x=0; x<board[y].length;x++)
      {
        if(board[y][x] == 1)
        {
          var temp = $("<div class='boardcell'></div>");
          temp.css('left', 50*x+'px');
          temp.css('top',50*y+'px')
          cells.push(temp);
          $('#board').append(temp);
        }
      }
    }

  //board animation
  var milliseconds = new Date().getTime();
  interval = setInterval(function(){
    for(var i = 0; i < cells.length ; i++) {
      cells[i].css('top',cells[i].position().top+1+'px');
      if(cells[i].position().top - (board.length*50-50) > -50
        &&cells[i].position().left == ship_pos) {
        alert("gameover");
        clearInterval(interval);
      }
    }
  }, 50);

  //"rocketship"
  $('#board').append($("<img id='ship' src='JeffB.png' />"));
  var ship_pos = board[0].length*25-25;
  $('#ship').css('left', ship_pos+'px');
  $('#ship').css('top', (board.length*50-50)+'px');
  $(document).keydown(function(e) {
    if(e.keyCode==37 && ship_pos != 0) {
      ship_pos -= 50;
    } else if(e.keyCode == 39 && ship_pos != (board.length-1)*50) {
      ship_pos += 50;
    }
    $('#ship').css('left', ship_pos+'px');
  });

});