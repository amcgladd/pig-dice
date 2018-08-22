
// Business Logic
var roll = function () {
  return Math.floor(6 * Math.random()) + 1;
}

function switchPlayer() {
  $(".player-data").toggle();
  // this.roll = 0;
}

function Player(name) {
  this.roll = 0;
  this.turnTotal = 0;
  this.playerTotal = 0;
  this.name = name;
}

Player.prototype.updateTurn = function() {
  if(this.roll === 1) {
    this.turnTotal = 0;
    switchPlayer();
    $("#message").text("Player " + this.name + " rolled a 1. Turn over!");
  } else if ((this.roll > 1) && (this.roll < 7)) {
      this.turnTotal += this.roll;
      $("#message").text("Player " + this.name + " rolled a " + this.roll + ".");
    }
  }

  Player.prototype.hold = function() {
    this.playerTotal += this.turnTotal;
    this.roll = 0;
    this.turnTotal = 0;
    switchPlayer();
    if(this.playerTotal >= 100) {
      $(".winner").text("Player " + this.name + " is the WINNER! CHICKEN DINNER!");
      $(".jumbotron").show();
    }
  }

// User-Interface Logic
$(document).ready(function() {
  var player1 = new Player(1);
  var player2 = new Player(2);

  $("#player-one-roll").click(function(){
    player1.roll = roll();
    player1.updateTurn();
    $("#your-roll1").text(player1.roll);
    $("#turn-total1").text(player1.turnTotal);
  });
  $("#player-one-hold").click(function(){
    player1.hold();
    $("#your-roll1").text(0);
    $("#turn-total1").text(0);
    $("#player-one-total").text(player1.playerTotal);
  });
  $("#player-two-roll").click(function(){
    player2.roll = roll();
    player2.updateTurn();
    $("#your-roll2").text(player2.roll);
    $("#turn-total2").text(player2.turnTotal);
  });
  $("#player-two-hold").click(function(){
    player2.hold();
    $("#your-roll2").text(0);
    $("#turn-total2").text(0);
    $("#player-two-total").text(player2.playerTotal);
  });
});
