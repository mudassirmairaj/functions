// Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
// return the uppercase version of the string if the boolean is true. The function should return the
// lowercase version of the string if the boolean is false.
function caseChange(v1, v2) {
  if (v2 == true) {
    return v1.toUpperCase();
  } else {
    return v1;
  }
}

console.log(caseChange("Super", true)); // 'SUPER'
console.log(caseChange("Super", false)); // 'super'
console.log(caseChange("tAmBourine", true)); // 'TAMBOURINE'
console.log(caseChange("tAmBourine", false)); // 'tambourine'
