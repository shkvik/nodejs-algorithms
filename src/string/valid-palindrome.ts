function validPalindrome(s: string): boolean {

  const isPalindrome = (str: string, left: number, right: number): boolean => {
    while (left < right) {
      if (str[left] !== str[right]) {
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
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }

  return true;
}

function testValidPalindrome(){
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