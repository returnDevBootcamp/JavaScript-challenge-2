// Good Luck! You got this 💪🏾
// Write your code here.
// Reds score
var redSccore1 = 96;
var redSccore2 = 108;
var redSccore3 = 98;

// Red's average scores
var redAverageScore = redSccore1 + redSccore2 + redSccore3;

// Blue score
var blueSccore1 = 88;
var blueSccore2 = 91;
var blueSccore3 = 110;

// Blue's average scores

var blueAverageScore = blueSccore1 + blueSccore2 + blueSccore3;

console.log(blueAverageScore < redAverageScore);

if (blueAverageScore > 100 === true && redAverageScore > 100 === true) {
  console.log("Win");
} else if (blueAverageScore < 100 === false && redAverageScore < 100 === true) {
  console.log(" lost ");
}
