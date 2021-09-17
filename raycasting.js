import { drawFloorCeiling, Level } from "./map.js";
import { Player } from "./player.js";
import { reescalaCanvas } from "./functions.js";
import { inicializaSprites, renderSprites } from "./sprite.js";
import { setUpControls } from "./control.js";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var FPS = 50;
var canvasAncho = 500;
var canvasAlto = 500;
let zBuffer = [];

canvas.width = canvasAncho;
canvas.height = canvasAlto;

var escenario = new Level(canvas);
var jugador = new Player(ctx, escenario, 60, 60);
setUpControls(jugador);
inicializaSprites(jugador, ctx);
reescalaCanvas();
setInterval(function () { principal(); }, 1000 / FPS);

function principal() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFloorCeiling(ctx);
  jugador.dibuja();
  renderSprites(jugador, ctx);
}

export { zBuffer }
