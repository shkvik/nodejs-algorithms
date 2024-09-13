function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const mapSToT = new Map<string, string>();
  const mapTToS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!mapSToT.has(charS)) {
      mapSToT.set(charS, charT);
    } else if (mapSToT.get(charS) !== charT) {
      return false;
    }

    if (!mapTToS.has(charT)) {
      mapTToS.set(charT, charS);
    } else if (mapTToS.get(charT) !== charS) {
      return false;
    }
  }

  return true;
}

function isIsomorphicDBG(){
  const tests = [
    {
      input: { s: "egg", t: "add" },
      result: true
    },
    {
      input: { s: "foo", t: "bar" },
      result: false
    },
    {
      input: { s: "paper", t: "title" },
      result: true
    }
  ];
  
  tests.forEach((test, index) => {
    const result = isIsomorphic(test.input.s, test.input.t);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}