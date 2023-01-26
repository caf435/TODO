const processArray = require("../index");

//функция где название тест
describe("Тесты функции обработки массива", () => {
  //тесты
  describe("Общие тесты", () => {
    test("Возвращает ли наша функция массив?", () => {
      const array = [];
      expect(Array.isArray(processArray(array))).toBe(true);
    });
  });

  //   describe("Функциональные тесты", () => {
  //     test("Удаляет ли она повторяющиеся значения?", () => {});
  //   });
});
