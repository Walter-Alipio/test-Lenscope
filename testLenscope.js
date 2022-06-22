"use strict";

//validos
const optical1 = [-10, 0, -3, 0];
const optical2 = [-10, -12, 0, 0];
const optical3 = [-12, 0, -2, -2];
const optical4 = [-9.25, -2.75, -2, -2];
//inválidos
const optical5 = [1, -10, -2, -2];
const optical6 = [-16, -10, -2, -2];
const optical7 = [-10, -10, 2, -2];
const optical8 = [-10, -10.26, -2, -2];
const optical9 = [-16, -16, 2, 2];

function chooseGlass(
  sphericLeft,
  sphericRight,
  cylindricalLeft,
  cylindricalRight
) {
  const test = [sphericLeft, sphericRight, cylindricalLeft, cylindricalRight];
  for (let i = 0; i < test.length; i++) {
    if (!Number.isInteger(test[i] % 0.25) || test[i] > 0 || test[i] < -15) {
      return "Grau óptico inválido!";
    }
  }

  if (!cylindricalLeft && !cylindricalRight) {
    if (
      (sphericLeft <= -3 && sphericLeft >= -12) ||
      (sphericRight <= -3 && sphericRight >= -12)
    ) {
      return "Nós indicamos as lentes Prime";
    }
  } else if (cylindricalLeft >= -2 && cylindricalRight >= -2) {
    if (
      (sphericLeft <= -3 && sphericLeft >= -10) ||
      (sphericRight <= -3 && sphericRight >= -10)
    ) {
      return "Nós indicamos as lentes Prime";
    }
  }

  return "Nós indicamos as lentes Vision.";
}

console.log(chooseGlass(...optical1)); //Vision
console.log(chooseGlass(...optical2)); //Prime
console.log(chooseGlass(...optical3)); //Vision
console.log(chooseGlass(...optical4)); //Prime
console.log(chooseGlass(...optical5)); //invalido
console.log(chooseGlass(...optical6)); //invalido
console.log(chooseGlass(...optical7)); //invalido
console.log(chooseGlass(...optical8)); //invalido
console.log(chooseGlass(...optical9)); //invalido
