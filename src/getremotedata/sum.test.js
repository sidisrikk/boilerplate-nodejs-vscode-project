import sum from './sum';

describe('simple math', () => {
  test('adds 1 + 2 not equal 2', () => {
    expect(sum(1, 2)).not.toBe(2);
  });
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
});
