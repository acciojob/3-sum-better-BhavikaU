function threeSum(arr, target) {
  let initialDiff = Infinity;
  let ans = -1;
  let n = arr.length;

  for (let i = 0; i <= n - 3; i++) {
    for (let j = i + 1; j <= n - 2; j++) {
      for (let k = j + 1; k <= n - 1; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        let diff = Math.abs(sum - target);

        if (diff < initialDiff) {
          initialDiff = diff;
          ans = sum;
        }
      }
    }
  }

  return ans; // Return the closest sum
}

module.exports = threeSum;
