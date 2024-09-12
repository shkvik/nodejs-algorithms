function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (original > reversed) {
    reversed = reversed * 10 + original % 10;
    original = Math.floor(original / 10);
  }

  return original === reversed || original === Math.floor(reversed / 10);
}
