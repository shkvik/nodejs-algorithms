function compress(chars: string[]): number {
  let write = 0; // Указатель на позицию записи
  let read = 0;  // Указатель на позицию чтения

  while (read < chars.length) {
    const char = chars[read]; // Текущий символ
    let count = 0;

    // Считаем количество одинаковых символов подряд
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    // Записываем текущий символ
    chars[write] = char;
    write++;

    // Если количество символов больше 1, записываем число
    if (count > 1) {
      const countStr = count.toString();
      for (let i = 0; i < countStr.length; i++) {
        chars[write] = countStr[i];
        write++;
      }
    }
  }

  return write; // Возвращаем новую длину массива
}


function compressDBG() {
  const tests = [
    {
      input: ["a", "a", "b", "b", "c", "c", "c"],
      result: ["a", "2", "b", "2", "c", "3"], // Возвращаемое значение: 6
    },
    {
      input: ["a"],
      result: ["a"], // Возвращаемое значение: 1
    },
    {
      input: ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
      result: ["a", "b", "1", "2"], // Возвращаемое значение: 4
    }
  ];

  tests.forEach((test, index) => {
    const chars = test.input.slice();
    const newLength = compress(chars);
    const success = JSON.stringify(chars.slice(0, newLength)) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(chars.slice(0, newLength))}`);
    }
  });
}