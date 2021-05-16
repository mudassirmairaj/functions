let qty = 21;
if (qty % 3 === 0 && qty % 5 === 0) {
  console.log(`${qty} is divisible by both!`);
} else if (qty % 3 === 0 || qty % 5 === 0) {
  console.log(`${qty} is divisible by either one of the two!`);
} else {
  console.log("none");
}
