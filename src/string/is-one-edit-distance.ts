function isOneEditDistance(s: string, t: string): boolean {
  const lenS = s.length;
  const lenT = t.length;

  if (Math.abs(lenS - lenT) > 1) {
    return false;
  }
  if (lenS > lenT) {
    return isOneEditDistance(t, s);
  }
  for (let i = 0; i < lenS; i++) {
    if (s[i] !== t[i]) {
      if (lenS === lenT) {
        return s.slice(i + 1) === t.slice(i + 1);
      } else {
        return s.slice(i) === t.slice(i + 1);
      }
    }
  }
  return lenS + 1 === lenT;
}
