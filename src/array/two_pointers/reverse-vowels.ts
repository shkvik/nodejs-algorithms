const reverseVowels = (s: string) => {
  const vowelSet = new Set<string>([
    'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U',
  ])
  const str = Array.from(s);
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (!vowelSet.has(str[l]) && l < r) l++;
    while (!vowelSet.has(str[r]) && l < r) r--;
    if (l < r) {
      [str[l++], str[r--]] = [str[r], str[l]]
    }
  }
  return str.join('')
};