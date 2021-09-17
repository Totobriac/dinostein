import { convierteRadianes, distanciaEntrePuntos } from "./functions.js";
import { zBuffer } from "./raycasting.js";

const FOV = 60;
const FOV_medio = convierteRadianes(FOV / 2);
var canvasAncho = 500;
var canvasAlto = 500;
var sprites = [];

class Sprite {
  constructor(x, y, imagen, jugador, ctx) {
    this.x = x;
    this.y = y;
    this.imagen = imagen;
    this.jugador = jugador;
    this.distancia = 0;
    this.angulo = 0;
    this.visible = false;
    this.ctx = ctx;
  }
  calculaAngulo() {
    var vectX = this.x - this.jugador.x;
    var vectY = this.y - this.jugador.y;
    var anguloJugadorObjeto = Math.atan2(vectY, vectX);
    var diferenciaAngulo = this.jugador.anguloRotacion - anguloJugadorObjeto;
    if (diferenciaAngulo < -3.14159)
      diferenciaAngulo += 2.0 * 3.14159;
    if (diferenciaAngulo > 3.14159)
      diferenciaAngulo -= 2.0 * 3.14159;
    diferenciaAngulo = Math.abs(diferenciaAngulo);
    if (diferenciaAngulo < FOV_medio)
      this.visible = true;
    else
      this.visible = false;
  }
  calculaDistancia() {
    this.distancia = distanciaEntrePuntos(this.jugador.x, this.jugador.y, this.x, this.y)
  }
  actualizaDatos() {
    this.calculaAngulo();
    this.calculaDistancia();
  }
  dibuja() {
    this.actualizaDatos();
    if (this.visible == true) {
      var altoTile = 500;
      var distanciaPlanoProyeccion = (canvasAncho / 2) / Math.tan(FOV / 2);
      var alturaSprite = (altoTile / this.distancia) * distanciaPlanoProyeccion;
      var y0 = parseInt(canvasAlto / 2) - parseInt(alturaSprite / 2);
      var y1 = y0 + alturaSprite;
      var altoTextura = 64;
      var anchoTextura = 64;
      var alturaTextura = y0 - y1;
      var anchuraTextura = alturaTextura;
      var dx = this.x - this.jugador.x;
      var dy = this.y - this.jugador.y;
      var spriteAngle = Math.atan2(dy, dx) - this.jugador.anguloRotacion;
      var viewDist = 500;
      var x0 = Math.tan(spriteAngle) * viewDist;
      var x = (canvasAncho / 2 + x0 - anchuraTextura / 2);
      this.ctx.imageSmoothingEnabled = false;
      var anchuraColumna = alturaTextura / altoTextura;
      for (let i = 0; i < anchoTextura; i++) {
        for (let j = 0; j < anchuraColumna; j++) {
          var x1 = parseInt(x + ((i - 1) * anchuraColumna) + j);
          if (zBuffer[x1] > this.distancia) {
            this.ctx.drawImage(this.imagen, i, 0, 1, altoTextura - 1, x1, y1, 1, alturaTextura);
          }
        }
      }
    }
  }
}

function inicializaSprites(jugador, ctx) {
  var imgArmor = new Image();
  imgArmor.src = "./assets/lamp.png";
  var imgPlanta = new Image();
  imgPlanta.src = "./assets/lamp.png";
  sprites[0] = new Sprite(300, 120, imgArmor, jugador, ctx);
  sprites[1] = new Sprite(150, 150, imgArmor, jugador, ctx);
  sprites[2] = new Sprite(320, 300, imgPlanta, jugador, ctx);
  sprites[3] = new Sprite(300, 380, imgPlanta, jugador, ctx);
}

function renderSprites() {
  sprites.sort(function (obj1, obj2) {
    return obj2.distancia - obj1.distancia;
  });
  for (let a = 0; a < sprites.length; a++) {
    sprites[a].dibuja();
  }
}

export { inicializaSprites, renderSprites }