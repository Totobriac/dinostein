import { drawFloorCeiling, Level } from "./map.js";
import { Player } from "./player.js";
import { reescalaCanvas } from "./functions.js";
import { inicializaSprites, renderSprites } from "./sprite.js" 


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var FPS = 50;

var canvasAncho = 500;
var canvasAlto = 500;

canvas.width = canvasAncho;
canvas.height = canvasAlto;

var escenario = new Level(canvas);
var jugador = new Player(ctx, escenario, 100, 100);

inicializaSprites(jugador, ctx);
let zBuffer = [];

reescalaCanvas();

document.addEventListener('keydown', function (tecla) {
  switch (tecla.keyCode) {
    case 38:
      jugador.arriba();
      break;
    case 40:
      jugador.abajo();
      break;
    case 39:
      jugador.derecha();
      break;
    case 37:
      jugador.izquierda();
      break;
  }
});
document.addEventListener('keyup', function (tecla) {
  switch (tecla.keyCode) {
    case 38:
      jugador.avanzaSuelta();
      break;
    case 40:
      jugador.avanzaSuelta();
      break;
    case 39:
      jugador.giraSuelta();
      break;
    case 37:
      jugador.giraSuelta();
      break;
  }
});

setInterval(function () { principal(); }, 1000 / FPS);

function principal() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, 200, 200)
  drawFloorCeiling(ctx);
  jugador.dibuja();
  renderSprites(jugador, ctx);
}

export { zBuffer }