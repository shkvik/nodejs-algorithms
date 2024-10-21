import { faker } from "@faker-js/faker";
import { Heap } from "./heap";
import { findRelativeRanks } from "../find-relative-ranks";
import { maxSlidingWindow } from "../max-sliding-window";


describe('Heap', function () {
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

    it('506. Relative Ranks', () => {
      // Example 1
      const input1 = [5, 4, 3, 2, 1];
      const output1 = ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"];
      const expect1 = findRelativeRanks(input1);
      expect(expect1).toStrictEqual(output1)

      // Example 2
      const input2 = [10, 3, 8, 9, 4];
      const output2 = ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"];
      const expect3 = findRelativeRanks(input2);
      expect(expect3).toStrictEqual(output2)
    });

    it('239. Sliding Window Maximum', () => {
      // Example 1
      const nums1 = [1,3,-1,-3,5,3,6,7], k1 = 3;
      const output1 = [3,3,5,5,6,7];
      const expect1 = maxSlidingWindow(nums1, k1);
      expect(expect1).toStrictEqual(output1)

      // Example 2
      const nums2 = [1], k2 = 1;
      const output2 = [1];
      const expect2 = maxSlidingWindow(nums2, k2);
      expect(expect2).toStrictEqual(output2);

      // Example 3
      const nums3 = [1], k3 = 1;
      const output3 = [1];
      const expect3 = maxSlidingWindow(nums3, k3);
      expect(expect3).toStrictEqual(output3);
    });
  });

});
