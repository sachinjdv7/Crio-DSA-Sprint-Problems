function findElement(n, arr, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
