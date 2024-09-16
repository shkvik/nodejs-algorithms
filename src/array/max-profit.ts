export function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

export function maxProfitDBG(){
  
  const tests = [
    {
      input: [7, 1, 5, 3, 6, 4],
      result: 5 // Купить за 1 и продать за 6
    },
    {
      input: [7, 6, 4, 3, 1],
      result: 0 // Прибыль не возможна
    }
  ];
  
  tests.forEach((test, index) => {
    const result = maxProfit(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}