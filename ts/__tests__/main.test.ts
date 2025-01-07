import { calculateTotal } from "../main";

describe('Success Cases', () => {
  test('total 1 + 2 + 3', () => {
    expect(calculateTotal([1, 2, 3])).toBe(6);
  });
  test('total -1 + 2 + 3', () => {
    expect(calculateTotal([-1, 2, 3])).toBe(4);
  });
});

describe('Boundary Cases', () => {
  test('empty array', () => {
    expect(calculateTotal([])).toBe(0);
  })
  test('total -1', () => {
    expect(calculateTotal([-1])).toBe(-1);
  })
  test('total 0', () => {
    expect(calculateTotal([0])).toBe(0);
  })
  test('total 1', () => {
    expect(calculateTotal([1])).toBe(1);
  })
})