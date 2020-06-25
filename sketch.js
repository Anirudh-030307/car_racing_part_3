var database;
var form,game,player,playerCount;
var gameState = 0 ;
var allPlayers;
var  car1, car2, car3, car4,cars;

function setup(){
  database = firebase.database();

  createCanvas(displayWidth-30,displayHeight-200);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){

  background("white");
 
  if (playerCount===4) {
      game.updateState(1);
  }

  if (gameState===1) {
    game.play();
}

}

