import * as assert from 'power-assert';
import Person from '../src/Person';

describe('Person class', () => {
  const p = new Person('adam', 10);
  describe('getName method', () => {
    it('a', () => {
      assert(p.getName() === 'ada');
    });

    it('err', () => {
      assert(p.getAge() === 20);
    });
  });
});
