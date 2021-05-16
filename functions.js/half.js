let half = function (num) {
  let answer = num / 2;
  return answer;
};
console.log(half(8)); // 4
console.log(half(15)); // 7.5
console.log(half(90)); // 45

let endsWithT = function (letter) {
  let ends = letter.endsWith("t");
  return ends;
};
console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")); // false
