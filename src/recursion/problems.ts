export function checkMaxRecursionDepth(depth = 0) {
  try {
    return checkMaxRecursionDepth(depth + 1);
  } catch (e) {
    return depth;
  }
}
