function longestPalindrome(s: string): string {
  let longest = "";
  if (s.length < 1 || s === null) {
    return longest;
  }
  const expandFromMiddle = (s: string, l: number, r: number) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.substring(l + 1, r);
  }
  for (let i = 0; i < s.length; i++) {
    const longestOdd = expandFromMiddle(s, i, i);
    const longestEven = expandFromMiddle(s, i, i + 1);

    if (longestOdd.length > longest.length) {
      longest = longestOdd;
    }
    if (longestEven.length > longest.length) {
      longest = longestEven;
    }
  }
  return longest;
};

function longestPalindromeSECOND(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  const expandAroundCenter = (l: number, r: number) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxLength) {
        start = l;
        maxLength = r - l + 1;
      }
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return s.slice(start, start + maxLength);
}