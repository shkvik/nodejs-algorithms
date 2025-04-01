/**
 * @problem [2390. Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string)
 */
function removeStars(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (char !== '*') {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
};