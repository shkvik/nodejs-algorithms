function validPalindrome(s: string): boolean {

  const isPalindrome = (left: number, right: number): boolean => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Пробуем удалить один символ с одной из сторон
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
    left++;
    right--;
  }

  return true;
}

export function testValidPalindrome(){
  const tests = [
    {
      input: "abca",
      result: true // Можно удалить символ 'b' или 'c', чтобы строка стала палиндромом ("aca" или "aba")
    },
    {
      input: "racecar",
      result: true // Строка уже является палиндромом
    },
    {
      input: "abc",
      result: false // Невозможно сделать палиндромом, удалив ровно один символ
    }
  ];
  
  tests.forEach((test, index) => {
    const result = validPalindrome(test.input);
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