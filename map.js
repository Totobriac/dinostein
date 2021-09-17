function drawFloorCeiling(ctx) {
  ctx.fillStyle = '#666666';
  ctx.fillRect(0, 0, 500, 250);
  ctx.fillStyle = '#752300';
  ctx.fillRect(0, 250, 500, 500);
}

var lev = [
  [1, 1, 2, 1, 1, 1, 2, 2, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var tileSize = 50;

class Level {

  constructor(canvas) {    
    this.grid = lev;
    this.canvas = canvas;
    this.gridHeight = this.grid.length;
    this.gridWidth = this.grid[0].length;
    this.tileHeight = tileSize;
    this.tileWidth = tileSize;
  }
  colision(x, y) {
    var hit = false;
    if (this.grid[y][x] != 0)
      hit = true;
    return hit;
  }
  tile(x, y) {
    var squareX = parseInt(x / this.tileWidth);
    var squareY = parseInt(y / this.tileHeight);
    return (this.grid[squareY][squareX]);
  }
}

export { drawFloorCeiling, Level }