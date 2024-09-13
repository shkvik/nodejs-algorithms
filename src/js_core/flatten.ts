function flat(arr: any[], depth: number): any[] {
  const result: any[] = [];

  const flattenHelper = (subArray: any[], currentDepth: number) => {
    for (const el of subArray) {
      if (Array.isArray(el) && currentDepth < depth) {
        flattenHelper(el, currentDepth + 1);
      } else {
        result.push(el);
      }
    }
  }
  flattenHelper(arr, 0);
  return result;
}
