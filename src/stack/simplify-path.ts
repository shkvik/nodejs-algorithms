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
