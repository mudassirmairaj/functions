let isDivBy4 = function (num) {
  let answer = num % 4 == 0;
  return answer;
};
console.log(isDivBy4(8)); // true
console.log(isDivBy4(12)); // true
console.log(isDivBy4(24)); // true
console.log(isDivBy4(9)); // false
console.log(isDivBy4(10)); // false
