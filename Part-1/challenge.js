// Good Luck! You got this 💪🏾
// Write your code here.
var Red=[96+108+89];
var blue=[88+91+110];
var score_min=100;

console.log(Red);
console.log(blue);
var avg_red=(Red/3);
console.log(avg_red);
var avg_blue=(blue/3);
console.log(avg_blue);

if(avg_red>avg_blue && Red>score_min){
	console.log("Red won");
}
else if(avg_red<avg_blue && blue>score_min){
         console.log("blue won");
}
else{
	console.log("draw");
}



