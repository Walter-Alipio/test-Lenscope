import chooseGlass from "../testLenscope.js";

//validos
const optical1 = [-10, 0, -3, 0]; //Vision
const optical2 = [-10, -12, 0, 0]; //Prime
const optical3 = [-12, 0, -2, -2]; //Vision
const optical4 = [-9.25, -2.75, -2, -2]; //Prime
//inválidos
const optical5 = [1, -10, -2, -2];
const optical6 = [-16, -10, -2, -2];
const optical7 = [-10, -10, 2, -2];
const optical8 = [-10, -10.26, -2, -2];
const optical9 = [-16, -16, 2, 2];

describe("Escolhe o tipo de lente", () => {
  it("Vision", () => {
    expect(chooseGlass(...optical1)).toBe("Nós indicamos as lentes Vision.");
  });
  it("Prime", () => {
    expect(chooseGlass(...optical2)).toBe("Nós indicamos as lentes Prime.");
  });
  it("Vision", () => {
    expect(chooseGlass(...optical3)).toBe("Nós indicamos as lentes Vision.");
  });
  it("Prime", () => {
    expect(chooseGlass(...optical4)).toBe("Nós indicamos as lentes Prime.");
  });
  it("Inválido", () => {
    expect(chooseGlass(...optical5)).toBe("Grau óptico inválido!");
  });
  it("Inválido", () => {
    expect(chooseGlass(...optical6)).toBe("Grau óptico inválido!");
  });
  it("Inválido", () => {
    expect(chooseGlass(...optical7)).toBe("Grau óptico inválido!");
  });
  it("Inválido", () => {
    expect(chooseGlass(...optical8)).toBe("Grau óptico inválido!");
  });
  it("Inválido", () => {
    expect(chooseGlass(...optical9)).toBe("Grau óptico inválido!");
  });
});
