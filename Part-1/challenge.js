var red = 96 + 108 + 89;
var blue = 88 + 91 + 110;

console.log(red);
console.log(blue);

var redavr = red / 3;
var blueavr = blue / 3;

console.log(redavr);
console.log(blueavr);

if (redavr > blueavr) {
  console.log("red won");
} else if (redavr < blueavr) {
  console.log("blue won");
} else {
  console.log("both won");
}
