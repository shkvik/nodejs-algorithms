// 3 = 9 sec


async function rateLimiter(str: string[], time: number) {
  for (let i = 0; i < str.length; i++) {
    await new Promise(res => setTimeout(res, time));
    console.log(str[i]);
  }
}

const strs = [
  'one',
  'two',
  'three',
]

rateLimiter(strs, 3000);