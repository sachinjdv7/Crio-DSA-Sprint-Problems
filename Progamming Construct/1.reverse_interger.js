function reverseNum(n) {
  // To store answer
  let ans = 0;

  //while loop

  while (n) {
    var rem = n % 10;
    ans = ans * 10 + rem;
    n = Math.floor(n / 10);
  }
  return ans;
}
