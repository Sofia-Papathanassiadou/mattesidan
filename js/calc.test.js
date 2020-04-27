const { pythagoras } = require("./calc");
test("3^2 + 4^2 = 5^2", () => { //Texten kan vara den man vill
    expect(pythagoras(3, 4)).toBe(5);
  });
  test("5^2 + 12^2 = 13^2", () => { //Texten kan vara den man vill
    expect(pythagoras(5, 12)).toBe(13);
  });
  test("8^2 + 15^2 = 17^2", () => { //Texten kan vara den man vill
    expect(pythagoras(8, 15)).toBe(17);
  });
  test("7^2 + 24^2 = 25^2", () => { //Texten kan vara den man vill
    expect(pythagoras(7, 24)).toBe(25);
  });
  test("20^2 + 21^2 = 29^2", () => { //Texten kan vara den man vill
    expect(pythagoras(20, 21)).toBe(29);
  });
  