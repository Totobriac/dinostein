function normalizaAngulo(angulo) {
  angulo = angulo % (2 * Math.PI);

  if (angulo < 0) {
    angulo = (2 * Math.PI) + angulo;	//si es negativo damos toda la vuelta en el otro sentido
  }

  return angulo;
}

function convierteRadianes(angulo) {
  angulo = angulo * (Math.PI / 180);
  return angulo;
}

function distanciaEntrePuntos(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function reescalaCanvas() {
  canvas.style.width = "400px";
  canvas.style.height = "400px";
}

export { normalizaAngulo, convierteRadianes, distanciaEntrePuntos, reescalaCanvas }