describe(`toCapitalizeFirstLetter`, () => {
  test(`Должно поменять первый символ на заглавный`, () => {
    expect(`pica Pica`).toBe(`pica Pica`);
  });

  test(`Не умирает на пустых строках`, () => {
    expect(``).toBe(``);
  });
});
