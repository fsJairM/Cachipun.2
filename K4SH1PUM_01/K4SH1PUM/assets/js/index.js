// Mi primer Cachipun Jair Mosquera, Alias: Jay_Mosk
const opciones = ["piedra", "papel", "tijera"];
const vistajugador = document.getElementById("vistajugador");
const vistarobot = document.getElementById("vistarobot");
const vistaresultado = document.getElementById("vistaresultado");
const vistarecordsjugador = document.getElementById("vistarecordsjugador");
const vistarecordsrobot = document.getElementById("vistarecordsrobot");
let recordsjugador = 0;
let recordsrobot = 0;

function jugar(opcionesjugador) {
  const opcionesrobot = opciones[Math.floor(Math.random() * 3)];
  let result = "";

  if (opcionesjugador === opcionesrobot) {
    result = "EMPATE!!!";
  }

  else {
    switch (opcionesjugador) {
      case "piedra":
        result = (opcionesrobot === "tijera") ? "GANASTE!" : "PERDISTE";
        break;
      case "papel":
        result = (opcionesrobot === "piedra") ? "GANASTE!" : "PERDISTE";
        break;
      case "tijera":
        result = (opcionesrobot === "papel") ? "GANASTE!" : "PERDISTE";
        break;

    }
  }
  vistajugador.textContent = `JUGADOR: ${opcionesjugador}`;
  vistarobot.textContent = `ROBOT: ${opcionesrobot}`;
  vistaresultado.textContent = result;

  vistaresultado.classList.remove("greenText", "redText");

  switch (result) {
    case "GANASTE!":
      vistaresultado.classList.add("greenText");
      recordsjugador++;
      vistarecordsjugador.textContent = recordsjugador;
      break;
      case "PERDISTE":
        vistaresultado.classList.add("redText");
        recordsrobot++;
        vistarecordsrobot.textContent = recordsrobot;
        break;

  }

}