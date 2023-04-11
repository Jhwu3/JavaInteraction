let title = document.getElementById("headTitle");
let myButton = document.getElementById("inputButton");
let myInput = document.getElementById("myInput");
let outputTxt = document.getElementById("output");

let colors = ["red", "green", "blue", "yellow", "black", "white", "green"]
let textColor = ["black", "white", "gray"];

myButton.addEventListener("click", function(){
	let val = myInput.value;
	generate(val);
	restyle();
})

function generate(name){
	var randomColor = Math.floor(Math.random() * colors.length);
	var col = colors[randomColor];

	outputTxt.innerText = "Hello, " + name + " you should wear: " + col + " tomorrow!";
}

function restyle(){
	var fontSiz = (Math.floor(Math.random) * 60);
	var fnt = "" + fontSiz; 
	outputTxt.style.fontSize = fnt;
	var randomColor = Math.floor(Math.random() * textColor.length);
	outputTxt.style.color = textColor[randomColor];
	var randomColor2 = Math.floor(Math.random() * textColor.length);
	outputTxt.style.backgroundColor = colors[randomColor2];

}