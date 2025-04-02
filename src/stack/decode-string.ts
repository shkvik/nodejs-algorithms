/**
 * @problem [2390. Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string)
 */
function decodeString(s: string): string {
  const numStack: number[] = [];
  const strStack: string[] = [];
  let sb = "";
  let n = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (/\d/.test(c)) {
      n = n * 10 + (c.charCodeAt(0) - '0'.charCodeAt(0));
    } 
    else if (c === '[') {
      numStack.push(n);
      strStack.push(sb);
      n = 0;
      sb = "";
    } 
    else if (c === ']') {
      const k = numStack.pop();
      const prev = strStack.pop();
      sb = prev + sb.repeat(k);
    } else {
      sb += c;
    }
  }
  return sb;
}


export function checkDecodeStringDBG() {
  const tests = [
    {
      input: "2[abc]3[cd]ef",
      result: "abcabccdcdcdef"
    },
    {
      input: "12[xy]",
      result: "xyxyxyxyxyxyxyxyxyxyxyxy"
    },
    {
      input: "3[a]",
      result: "aaa"
    },
    {
      input: "2[ab]",
      result: "abab"
    },
    {
      input: "1[z]",
      result: "z"
    },
    {
      input: "3[a2[c]]",
      result: "accaccacc"
    },
    {
      input: "2[b3[a]]",
      result: "baaabaaa"
    },
    {
      input: "10[a]",
      result: "aaaaaaaaaa"
    },
    {
      input: "",
      result: ""
    },
    {
      input: "abc",
      result: "abc"
    },
    {
      input: "3[]",
      result: ""
    },
    {
      input: "0[abc]",
      result: ""
    },
    {
      input: "2[a2[b2[c]]]",
      result: "abccbccabccbcc"
    }
  ];

  tests.forEach((test, index) => {
    const result = decodeString(test.input);
    const success = result === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`input:    ${JSON.stringify(test.input)}`);
      console.log(`expected: ${JSON.stringify(test.result)}`);
      console.log(`got:      ${JSON.stringify(result)}`);
    }
  });
}