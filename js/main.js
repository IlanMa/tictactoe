var player1 ="";
var player2 ="";
var winningLine = "";

function addName() {
    if (!$('#player2').val()){
        player1 = $('#player1').val();
        $('#playerone').css('display', 'none');
        $('#playertwo').css('display', 'block');
        $('#playerTurn').html('Player 2, what is your name?');
    }else{
        player2 = $('#player2').val();
        $('#playertwo').css('display', 'none');
        $('#grid').fadeIn(2000);
        $('#playerTurn').html(player1 + "'s turn");
  } 
}

function resetGame(){
    play = true;
    turns = 1;
    table = [["","",""], ["","",""], ["","",""]];
    turn = true;
    winningLine = "";
    $("div").html('');
    $("div").fadeTo(1000, 1);  
    $("#playerTurn").html(player1 + "'s turn");
    $("#clickMe").css('display', 'none');  
    if (!player1){
        $("#playerTurn").html("Player 1, what is your name?");
    }                       
}

var table = [["","",""], ["","",""], ["","",""]];
var play = true;
var turn = true;
turns = 1;

function makeMove(playerTurn) {
    if (play && turns <= 9) {
                                                                
        if (checkSpot(playerTurn)){
    
            if(turn){
                inputMove("X", playerTurn);
            } else {
                inputMove("O", playerTurn);
            }
          
            if(checkWinner(table)){
                if(turn){
                    $('#playerTurn').html(player1 + " wins!");
                } else {
                    $('#playerTurn').html(player2 + " wins!");
                }
                
                play = false;
            } else {
                turn = !turn;
                
                if (turn) {
                    $("#playerTurn").html(player1 + "'s" + " turn");
                }  else {
                   $("#playerTurn").html(player2 + "'s" + " turn");
                }
            }
            
            turns++;
        } else {
            $('#error').css('display','block');
            $('#error').html('Case full, try again');
            $('#error').delay(1000).fadeOut(2000);
        }
        
    }
    
    if (turns === 10 && play === true){
        $('#playerTurn').html("Draw");
        play = false;
    }
    
    if (play === false){
        $('div').fadeTo(1000, 0.3);
        $("#clickMe").fadeIn(1000);
        for (i=0; i<3; i++){
            $('.'+winningLine[i]).stop();
        }
       
    }
}

function inputMove(val, move){
    switch(move) {
        case "1A": table[0][0] = val; break;
        case "2A": table[1][0] = val; break;
        case "3A": table[2][0] = val; break;
        case "1B": table[0][1] = val; break;
        case "2B": table[1][1] = val; break;
        case "3B": table[2][1] = val; break;
        case "1C": table[0][2] = val; break;
        case "2C": table[1][2] = val; break;
        case "3C": table[2][2] = val; break;
        default  : console.log("Entry Unknown!");
    }  
    $('#'+move).html(val);
};

function checkSpot(move){
    switch(move) {
        case "1A": return (table[0][0] === "");
        case "2A": return (table[1][0] === "");
        case "3A": return (table[2][0] === "");
        case "1B": return (table[0][1] === "");
        case "2B": return (table[1][1] === "");
        case "3B": return (table[2][1] === "");
        case "1C": return (table[0][2] === "");
        case "2C": return (table[1][2] === "");
        case "3C": return (table[2][2] === "");
        default  : console.log("Entry Unknown!");
        return false;
    }
};

function checkWinner(grid){
    var attempt = grid[0][0] + grid[0][1] + grid[0][2];
    
    if(checkWinningCombo(attempt)){
        winningLine = ['grid00','grid01','grid02'];
        return true;
    }
        
    var attempt = grid[1][0] + grid[1][1] + grid[1][2];
    
    if(checkWinningCombo(attempt)){
        winningLine = ['grid10','grid11','grid12'];
        return true;
    }
        
    var attempt = grid[2][0] + grid[2][1] + grid[2][2];
    
    if(checkWinningCombo(attempt)){
        winningLine = ['grid20','grid21','grid22'];
        return true;
    }
        
    var attempt = grid[0][0] + grid[1][0] + grid[2][0];
    
    if(checkWinningCombo(attempt)){
        winningLine = ['grid00','grid10','grid20'];
        return true;
    }
        
    var attempt = grid[0][1] + grid[1][1] + grid[2][1];
    
    if(checkWinningCombo(attempt)){
        winningLine = ['grid01','grid11','grid21'];
        return true;
    }
        
    var attempt = grid[0][2] + grid[1][2] + grid[2][2];
    
    if(checkWinningCombo(attempt)){
        winningLine = ['grid02','grid12','grid22'];
        return true;
    }
        
    var attempt = grid[0][0] + grid[1][1] + grid[2][2];
    
    if(checkWinningCombo(attempt)){
        winningLine = ['grid00','grid11','grid22'];
        return true;
    }
        
    var attempt = grid[0][2] + grid[1][1] + grid[2][0];
    
    if(checkWinningCombo(attempt)){
        winningLine = ['grid02','grid11','grid20'];
        return true;
    }
        
    return false;
}
    
function checkWinningCombo(combo)
{
    if(combo === "XXX" || combo === "OOO"){ 
        return true;
    }else{
        return false;
    }
}


