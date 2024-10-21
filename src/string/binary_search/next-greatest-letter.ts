

function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0, right = letters.length - 1;
  
  if (target >= letters[right]) {
    return letters[0];
  }
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[left];
};