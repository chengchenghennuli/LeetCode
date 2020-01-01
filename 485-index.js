/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
  let count = 0;
  let l = nums.length;
  while (l--) {
    const n = nums[l];
    if (n === 0) {
      count = 0;
    } else {
      max = Math.max(max, ++count);
    }
  }
  return max;
};
