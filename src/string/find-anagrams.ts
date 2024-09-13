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
  if (JSON.stringify(pCount) === JSON.stringify(sCount)) {
    result.push(0);
  }

  // Скользящее окно по строке s
  for (let i = p.length; i < s.length; i++) {
    // Добавляем символ в окно
    sCount[s.charCodeAt(i) - aCharCode]++; 
    // Убираем символ за пределами окна
    sCount[s.charCodeAt(i - p.length) - aCharCode]--; 

    // Проверяем текущее окно
    if (JSON.stringify(pCount) === JSON.stringify(sCount)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}
