/**
 * @problem [1657. Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close)
 * 
 * ### Решаем методом подсчёта букв
 * Главное понять, что 2 операции из задачи можно делать сколько угодно раз,
 * но существуют глобальные ограничения, которые помогут упростить поиск и
 * не заниматься перебором всех операций.
 * 
 */
function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }
  const aCharCode = 'a'.charCodeAt(0);
  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    freq1[word1.charCodeAt(i) - aCharCode]++;
    freq2[word2.charCodeAt(i) - aCharCode]++;
  }
  for (let i = 0; i < 26; i++) {
    if (freq1[i] === 0 && freq2[i] !== 0) {
      return false;
    }
    if (freq2[i] === 0 && freq1[i] !== 0) {
      return false;
    }
  }
  freq1.sort();
  freq2.sort();
  return freq1.every((num, i) => num === freq2[i]);
};


export function checkCloseStringsDBG() {
  const tests = [
    {
      input: { word1: "abc", word2: "bca" },
      result: true // Содержат одни и те же символы и частоты можно переставить
    },
    {
      input: { word1: "a", word2: "aa" },
      result: false // У первого одна 'a', у второго — две
    },
    {
      input: { word1: "cabbba", word2: "abbccc" },
      result: true // Частоты [1,2,3] => [3,2,1], буквы одинаковые
    },
    {
      input: { word1: "cabbba", word2: "aabbss" },
      result: false // Есть буквы, которых нет в другой строке
    },
    {
      input: { word1: "uau", word2: "ssx" },
      result: false // Нет совпадающих символов
    }
  ];

  tests.forEach((test, index) => {
    const result = closeStrings(test.input.word1, test.input.word2);
    const success = result === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}