import { drawFloorCeiling, Level } from "./map.js";
import { Player } from "./player.js";
import { resizeCanvas } from "./functions.js";
import { createSprites, drawSprites } from "./sprite.js";
import { setUpControls } from "./control.js";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var FPS = 50;

var canvasWidth = 1200;
var canvasHeight = 400;

var gameWidth = 500;
var gameHeight = 500;
let zBuffer = [];

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var level = new Level(canvas);
var player = new Player(ctx, level, 60, 60);
setUpControls(player);
createSprites(player, ctx);
resizeCanvas();
setInterval(function () { main(); }, 1000 / FPS);

function main() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFloorCeiling(ctx);
  player.draw();
  drawSprites(player, ctx);
}

export { zBuffer }
