const processArray = require("../index");

//функция где название тест
describe("Тесты функции обработки массива", () => {
  //тесты
  describe("Общие тесты", () => {
    test("Возвращает ли наша функция массив?", () => {
      const array = [];
      expect(Array.isArray(processArray(array))).toBe(true);
    });
    test("Возвращает ли функция пустой массив при передаче его в эту функцию?", () => {
      const array = [];
      expect(processArray(array)).toEqual([]);
    });
  });

  describe("Функциональные тесты", () => {
    test("Удаляет ли она повторяющиеся значения?", () => {
      const array = [1, 2, 1, 2, 2, 3, 4];
      expect(processArray(array)).toEqual([1, 2, 3, 4]);
    });
    test("Заменяет ли функция отрицательные значения на *?", () => {
      const array = [1, 2, 1, -2, 2, 3, 4];
      expect(processArray(array)).toContain("*");
    });
    test("Срабатывает ли наша функция на всех отрицательных значениях на *?", () => {
      const array = [1, 2, 1, -2, 2, -3, 4];
      expect(processArray(array)).toEqual([1, 2, "*", "*", 4]);
    });
  });
});
