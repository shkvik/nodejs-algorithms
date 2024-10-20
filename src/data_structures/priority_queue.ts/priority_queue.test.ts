import { PriorityQueue } from "./priority_queue.strucrure";
import { faker } from "@faker-js/faker";

describe('PriorityQueue', function () {
  const testDataCout = 100_000;

  const n1 = 5;
  const n2 = 6;
  const n3 = 7;
  const n4 = 8;
  const n5 = 9;

  const nArr = [n1, n2, n3, n4, n5];


  describe('max', () => {
    it('push', () => {
      const pq = new PriorityQueue<number>((a, b) => a > b);

      pq.push(n3);
      pq.push(n2);

      expect(pq.top()).toBe(n3);
      pq.push(n1);
      expect(pq.top()).toBe(n3);
      pq.push(n5);
      expect(pq.top()).toBe(n5);
    });

    it('pop', () => {
      for (let i = 0; i < 10; i++) {
        const pq = new PriorityQueue<number>((a, b) => a > b);
        const testArr = faker.helpers.shuffle(nArr);
        pq.pushMany(testArr);

        expect(pq.pop()).toBe(n5);
        expect(pq.pop()).toBe(n4);
        expect(pq.pop()).toBe(n3);
        expect(pq.pop()).toBe(n2);
        expect(pq.pop()).toBe(n1);
      }
    });

    it('100 000 elements', () => {
      const pq = new PriorityQueue<number>((a, b) => a > b);
      const testArr = faker.helpers.uniqueArray(
        () => faker.number.int({ min: 0, max: testDataCout }), testDataCout
      );
      pq.pushMany(testArr);
      testArr.sort((a, b) => b - a);
      testArr.forEach((num) => {
        expect(num).toBe(pq.pop());
      });
    });
  });

  describe('min', () => {

    const minCallBack = (a, b) => a < b;

    it('push', function () {
      const pq = new PriorityQueue<number>(minCallBack);

      pq.push(n5);
      pq.push(n4);

      expect(pq.top()).toBe(n4);
      pq.push(n2);
      expect(pq.top()).toBe(n2);
      pq.push(n3);
      expect(pq.top()).toBe(n2);
      pq.push(n1);
      expect(pq.top()).toBe(n1);
    });

    it('pop', () => {
      for (let i = 0; i < 10; i++) {
        const pq = new PriorityQueue<number>(minCallBack);
        const testArr = faker.helpers.shuffle(nArr);
        pq.pushMany(testArr);

        expect(pq.pop()).toBe(n1);
        expect(pq.pop()).toBe(n2);
        expect(pq.pop()).toBe(n3);
        expect(pq.pop()).toBe(n4);
        expect(pq.pop()).toBe(n5);
      }
    });

    it('100 000 elements', () => {
      const pq = new PriorityQueue<number>(minCallBack);
      const testArr = faker.helpers.uniqueArray(
        () => faker.number.int({ min: 0, max: testDataCout }), testDataCout
      );
      pq.pushMany(testArr);
      testArr.sort((a, b) => a - b);
      testArr.forEach((num) => {
        expect(num).toBe(pq.pop());
      });
    });

  });


});