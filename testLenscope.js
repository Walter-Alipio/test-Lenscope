"use strict";

export default function chooseGlass(
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
      return "Nós indicamos as lentes Prime.";
    }
  } else if (cylindricalLeft >= -2 && cylindricalRight >= -2) {
    if (
      (sphericLeft <= -3 && sphericLeft >= -10) ||
      (sphericRight <= -3 && sphericRight >= -10)
    ) {
      return "Nós indicamos as lentes Prime.";
    }
  }

  return "Nós indicamos as lentes Vision.";
}
