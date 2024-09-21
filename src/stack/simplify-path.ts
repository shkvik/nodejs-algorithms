function simplifyPath(path: string): string {
  const stack: string[] = [];
  const components = path.split('/');

  for (let component of components) {
    if (component === '' || component === '.') {
      continue;
    } else if (component === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(component);
    }
  }
  return '/' + stack.join('/');
}

export function simplifyPathDBG(){
  const tests = [
    {
      input: "/home/",
      result: "/home"
    },
    {
      input: "/../",
      result: "/"
    },
    {
      input: "/home//foo/",
      result: "/home/foo"
    },
    {
      input: "/a/./b/../../c/",
      result: "/c"
    }
  ];
  
  tests.forEach((test, index) => {
    const result = simplifyPath(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}