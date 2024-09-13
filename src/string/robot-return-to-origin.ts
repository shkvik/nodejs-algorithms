function judgeCircle(moves: string): boolean {
  let x = 0, y = 0;

  for (let move of moves) {
    if (move === 'U') {
      y++;
    } else if (move === 'D') {
      y--;
    } else if (move === 'R') {
      x++;
    } else if (move === 'L') {
      x--;
    }
  }

  // Робот вернется в исходную точку, если x и y равны 0
  return x === 0 && y === 0;
}
