function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);
  const aCharCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    count1[s1.charCodeAt(i) - aCharCode]++;
    count2[s2.charCodeAt(i) - aCharCode]++;
  }

  if (count1.every((elem, i) => elem === count2[i])){
    return true;
  } 

  for (let i = s1.length; i < s2.length; i++) {
    count2[s2.charCodeAt(i) - aCharCode]++;
    count2[s2.charCodeAt(i - s1.length) - aCharCode]--;

    if (count1.every((elem, i) => elem === count2[i])) {
      return true;
    }
  }

  return false;
}

export function checkInclusionDBG(){
  const tests = [
    {
      input: { s1: "ab", s2: "eidbaooo" },
      result: true // Перестановка "ab" есть в "eidbaooo" (индексы 3-4)
    },
    {
      input: { s1: "ab", s2: "eidboaoo" },
      result: false // Перестановки "ab" нет в "eidboaoo"
    }
  ];
  
  tests.forEach((test, index) => {
    const result = checkInclusion(test.input.s1, test.input.s2);
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