// JavaScript Document

// Two methods for timers - setTimeout and SetInterval (single / repeating)

// settimeout is in milliseconds
// setTimeout(simpleMessage,5000);

// Create a variable called myBackground and assign/associate it to the id name: aboutbg
// <section class="full-width-section bg-blue" id="aboutbg">
// It is a global varriable
var myBackground = document.getElementById("aboutbg");

// Create a variable called backgroundArray which is an array - object assigned with nine values - it is a global varriable
// This is equavalent to: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var backgroundArray = ["deka-bg-white","deka-bg-dirty","deka-bg-orange","deka-bg-green",
					  "deka-bg-yellow","deka-bg-orange","deka-bg-dark-turquise","deka-bg-red","deka-bg-blue","deka-bg-light-grey","deka-bg-light-yellow","deka-bg-dark-blue"];
// Create an Array called backgroundIndex with a value of 0 - it is a global varriable
var backgroundIndex = 0;

// Declare a function with a name: changeBackground - description of the function we want to run - change background color
function changeBackground() {
	// myBackground - you don't have to use var because it is a global variable
	// .setAttribute - apply this method to the myBackground which is assigned to the id:aboutbg
	// The parenthesis takes precedence, meaning that it will run first
	// This is equavalent to: ("class", "bg-white","bg-orange","bg-yellow","bg-light-yellow","bg-cyan","bg-green","bg-blue","bg-purple","bg-red","bg-dark-turquise")
	myBackground.setAttribute("class",backgroundArray[backgroundIndex]);
	// Here we are incrementing 0 by itself which will still return the value of 0
	backgroundIndex++;
	// We run an if statement that checks a particular condition
	// If 0 is greater than or equal to the length of the backgroundArray variable
	if (backgroundIndex >= backgroundArray.length) {
		// If this condition is true then we will return 0, once this is done we go back to the start and run the Interval
		backgroundIndex = 0;
	}
}

// setInterval is also in milliseconds
setInterval(changeBackground,40000);

/*var pageHeight = document.getElementById("pageheight");
pageHeight.setAttribute("class","full-width-section");
*/
