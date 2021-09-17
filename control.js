function setUpControls(jugador) {
  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case "ArrowUp":
        jugador.arriba();
        break;
      case "ArrowDown":
        jugador.abajo();
        break;
      case "ArrowRight":
        jugador.derecha();
        break;
      case "ArrowLeft":
        jugador.izquierda();
        break;
    }
  });
  document.addEventListener('keyup', function (event) {
    switch (event.key) {
      case "ArrowUp":
        jugador.avanzaSuelta();
        break;
      case "ArrowDown":
        jugador.avanzaSuelta();
        break;
      case "ArrowRight":
        jugador.giraSuelta();
        break;
      case "ArrowLeft":
        jugador.giraSuelta();
        break;
    }
  });
}

export { setUpControls }