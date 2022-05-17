const Calculator = require('./calculator');

describe('Add test', () => {
  test('3+7=10', () => {
    expect(Calculator.add(3, 7)).toEqual(10);
  });

  test('2+2=4', () => {
    expect(Calculator.add(2, 2)).toEqual(4);
  });

  test('5+5=90', () => {
    expect(Calculator.add(5, 5)).not.toBe(90);
  });

});

describe('divide test', () => {
    test('21/7=3', () => {
      expect(Calculator.divide(21, 7)).toEqual(3);
    });
  
    test('2/2=1', () => {
      expect(Calculator.divide(2, 2)).toEqual(1);
    });
  
    test('5/5=2', () => {
      expect(Calculator.divide(5, 5)).not.toBe(2);
    });
  
  });