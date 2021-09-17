function drawFloorCeiling(ctx) {
  ctx.fillStyle = '#666666';
  ctx.fillRect(0, 0, 500, 250);
  ctx.fillStyle = '#752300';
  ctx.fillRect(0, 250, 500, 500);
}

var level = [
  [1, 1, 2, 1, 1, 1, 2, 2, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 3, 3, 1],
  [1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var tamTile = 50;

class Level {

  constructor(canvas) {    
    this.matriz = level;
    this.canvas = canvas;
    this.altoM = this.matriz.length;
    this.anchoM = this.matriz[0].length;
    this.altoC = this.canvas.height;
    this.anchoC = this.canvas.width;
    this.altoT = tamTile;
    this.anchoT = tamTile;
  }
  colision(x, y) {
    var choca = false;
    if (this.matriz[y][x] != 0)
      choca = true;
    return choca;
  }
  tile(x, y) {
    var casillaX = parseInt(x / this.anchoT);
    var casillaY = parseInt(y / this.altoT);
    return (this.matriz[casillaY][casillaX]);
  }
}

export { drawFloorCeiling, Level }