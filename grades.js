"use strict"

console.log("Grades");

let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let sortedScores = scores.sort(function(first, second) {
	return first - second;
});
console.log("sortedScores", sortedScores);

let lowestScore = sortedScores[0];
console.log("The lowest score is ", lowestScore);

let reverseScores = sortedScores.reverse();
let highestScore = reverseScores[0];
console.log("The highest score is ", highestScore);

let gradeA = 0;
let gradeB = 0;
let gradeC = 0; 
let gradeF = 0; 
let gradeD = 0;


for (let i = 0; i < scores.length; i++) {
	if (scores[i] >= 50 && scores[i] <= 59) {
		console.log("This student got an F");
		gradeF++;
	} else if (scores[i] >= 60 && scores[i] <= 69) {
			console.log("This student got a D");
			gradeD++;
		} else if (scores[i] >= 70 && scores[i] <= 79) {
			console.log("This student got a C");
			gradeC++;
		} else if (scores[i] >= 80 && scores[i] <= 89) {
			console.log("This student got a B");
			gradeB++;
		} else if (scores[i] >= 90 && scores[i] <= 100) {
			console.log("This student got an A");
			gradeA++;
		}

}

console.log("There are " + gradeA + " A's.");
console.log("There are " + gradeB + " B's.");
console.log("There are " + gradeC + " C's.");
console.log("There are " + gradeD + " D's.");
console.log("There are " + gradeF + " F's.");


