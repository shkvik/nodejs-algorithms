function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  if (s.length < p.length) return result;

  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);

  const aCharCode = 'a'.charCodeAt(0);

  // Заполняем счетчик для строки p
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - aCharCode]++;
    sCount[s.charCodeAt(i) - aCharCode]++;
  }

  // Проверяем начальное окно
  if (pCount.every((elem, i) => elem === sCount[i])) {
    result.push(0);
  }

  // Скользящее окно по строке s
  for (let i = p.length; i < s.length; i++) {
    // Добавляем символ в окно
    sCount[s.charCodeAt(i) - aCharCode]++;
    // Убираем символ за пределами окна
    sCount[s.charCodeAt(i - p.length) - aCharCode]--;

    // Проверяем текущее окно
    if (pCount.every((elem, i) => elem === sCount[i])) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}

export function findAnagramsDBG() {
  const tests = [
    {
      input: { s: "cbaebabacd", p: "abc" },
      result: [0, 6] // Анаграммы "abc" начинаются с индексов 0 и 6
    },
    {
      input: { s: "abab", p: "ab" },
      result: [0, 1, 2] // Анаграммы "ab" начинаются с индексов 0, 1, и 2
    }
  ];

  tests.forEach((test, index) => {
    const result = findAnagrams(test.input.s, test.input.p);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}

