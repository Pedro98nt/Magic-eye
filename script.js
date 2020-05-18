let eye = document.querySelector(".eye");
let ball = document.querySelector(".ball");
let iris = document.getElementById("iris");
let star = document.querySelectorAll(".star");
let animated = document.querySelectorAll(".blink");
let illuminate = document.getElementById("illuminate");

let changeColour = () => {
	eye.style.visibility = "visible";
	illuminate.style.visibility = "visible";
	ball.style.background =
		"radial-gradient(circle at 65% 25%, #f7eded 1px, #462255 3%, #161118 90%)";

	for (item of star) {
		item.style.display = "block";
		item.style.left = `${Math.random() * 90}%`;
		item.style.top = `${Math.random() * 18}%`;
	}
};

let stopAnimation = () => {
	eye.style.visibility = "hidden";
	for (item of star) {
		item.style.display = "none";
	}
	illuminate.style.visibility = "hidden";
	ball.style.background =
		"radial-gradient(circle at 65% 25%, #f7eded 1px, #462255 3%, #161118 60%)";
};

ball.addEventListener("mouseover", changeColour);
ball.addEventListener("touchstart", changeColour);
ball.addEventListener("mouseleave", stopAnimation);
ball.addEventListener("touchend", stopAnimation);