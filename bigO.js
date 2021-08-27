//O(n)
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }


  //O(n)
  function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }

//O(1)
  function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }

//O(n)
  function onlyNumsAtEvenIndexes(nums) {
    let numsAtEvens = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
        numsAtEvens.push(nums[i]);
      }
    }
  
    return numsAtEvens;
  }

  //O(n^2)
  function runningSubtotals(nums) {
    let subtotals = [];
  
    for (let i = 0; i < nums.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += nums[j];
      }
      subtotals.push(subtotal);
    }
  
    return subtotals;
  }  

//O(n)
const VOWELS = "aeiouAEIOU";

function vowelsCounts(word) {
  let vowelsToCounts = {};

  for (let char of word) {//O(n)
    if (VOWELS.includes(char)) {//O(1)
      if (char in vowelsToCounts) {//O(1)
        vowelsToCounts[char] += 1;
      } else {
        vowelsToCounts[char] = 1;
      }
    }
  }

  return vowelsToCounts;
}