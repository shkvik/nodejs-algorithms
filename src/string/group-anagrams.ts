function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  const charCodeA = 'a'.charCodeAt(0);
  strs.forEach(str => {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - charCodeA]++;
    }
    const key = count.join('#');
    if (map.has(key)) {
      map.get(key)?.push(str);
    } else {
      map.set(key, [str]);
    }
  });

  return Array.from(map.values());
}
