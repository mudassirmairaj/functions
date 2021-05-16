let keepItQuiet = function (name) {
  let capitalize = name.toLowerCase();
  return capitalize + "...";
};
console.log(keepItQuiet("HOORAY")); // 'hooray...'
console.log(keepItQuiet("Doggo")); // 'doggo...'
console.log(keepItQuiet("WHAT?!?!")); // 'what?!?!...'
