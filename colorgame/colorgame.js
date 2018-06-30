
//variables
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var guessColor = document.querySelector("#guessColor");
var correct = document.querySelector("#correct");
var h1 = document.querySelector("h1");
var newColors = document.querySelector("#newColors");
var modeButtons = document.querySelectorAll(".mode");




init();

function init(){

	setUpModeButtons();
	setUpSquares();
	reset();

}


function setUpSquares() {
	for(i = 0; i < squares.length; i++) {
	
	//add clicklisteners to squares
	squares[i].addEventListener("click", function() {
		
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) {
			changeColors(pickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			correct.textContent = "Try again";
		}

	});


	}
}



function setUpModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;

			} else {
				numSquares = 6;
			}	
			reset();
		});
	}
}


newColors.addEventListener("click", generateNewColors);


//function that changes all colors when chosen correctly

function changeColors(color) {
	for(i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
		correct.textContent = "Correct";
		h1.style.backgroundColor = color;
		newColors.textContent = "Play again?"
	}
}


//picking a random color

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


//generating a random array of colors

function generateRandomColors(num) {
	var arr = [];
	
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}


//generating a random color

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}


function generateNewColors() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	guessColor.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	newColors.textContent = "New Colors";
	correct.textContent = "";
	
	for(i = 0; i < squares.length; i++) {
	//add new colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
}


function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change guessColor to match picked Color
	guessColor.textContent = pickedColor;
	newColors.textContent = "New Colors";
	correct.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}



