import { faker } from "@faker-js/faker";
import { Heap } from "./priority_queue.strucrure";


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
      const pq = new Heap<number>((a, b) => a > b);

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
        const pq = new Heap<number>((a, b) => a > b);
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
      const pq = new Heap<number>((a, b) => a > b);
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
      const pq = new Heap<number>(minCallBack);

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
        const pq = new Heap<number>(minCallBack);
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
      const pq = new Heap<number>(minCallBack);
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

  describe('via LeetCode problems', () => {

    function findRelativeRanks(score: number[]): string[] {
      const result = new Array(score.length).fill(null);
      const placements = {
        1: "Gold Medal",
        2: "Silver Medal",
        3: "Bronze Medal",
      }
      const pq = new Heap<[number, number]>((a, b) => {
        return a[1] > b[1]
      });
      for (const [index, value] of score.entries()) {
        pq.push([index, value]);
      }
      for (let i = 0; i < score.length; i++) {
        const offset = i + 1;
        const [index, value] = pq.pop()
        result[index] = placements[offset] || String(offset);
      }

      return result;
    };


    it('506. Relative Ranks', () => {
      // Example 1
      const input1 = [5, 4, 3, 2, 1];
      const output1 = ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"];
      const expect1 = findRelativeRanks(input1);
      expect(expect1).toStrictEqual(output1)

      const input2 = [10, 3, 8, 9, 4];
      const output2 = ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"];
      const expect3 = findRelativeRanks(input2);
      expect(expect3).toStrictEqual(output2)

    });
  });

});
