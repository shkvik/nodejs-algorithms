export function findPanagram(alphabet: Set<string>, s: string): string {
  const alphabetCount = new Map<string, number>();
  const requiredCount = alphabet.size;
  let formedCount = 0;
  let left = 0;
  let minLength = Infinity;
  let result = "";

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    if (alphabet.has(currentChar)) {
      alphabetCount.set(currentChar, (alphabetCount.get(currentChar) || 0) + 1);

      if (alphabetCount.get(currentChar) === 1) {
        formedCount++;
      }
    }

    while (formedCount === requiredCount) {
      const currentLength = right - left + 1;
      if (currentLength < minLength) {
        minLength = currentLength;
        result = s.substring(left, right + 1);
      }
      const leftChar = s[left];
      if (alphabet.has(leftChar)) {
        alphabetCount.set(leftChar, alphabetCount.get(leftChar)! - 1);
        if (alphabetCount.get(leftChar) === 0) {
          formedCount--;
        }
      }
      left++;
    }
  }

  return result;
}