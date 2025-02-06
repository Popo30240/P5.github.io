

//let currentIndex = 0; // Index de l'image actuelle

// Sélection des éléments HTML
const imageElement = document.getElementById("slideImage");
//console.log(imageElement)

const taglineElement = document.getElementById("slideText");
//console.log(taglineElement)

const arrowLeft = document.getElementById("arrow_left");
//console.log(arrow_left)

const arrowRight = document.getElementById("arrow_right");
//console.log(arrow_right)


arrowLeft.addEventListener("click", () => {
	console.log("Flèche gauche cliquée !");
});

arrowRight.addEventListener("click", () => {
	console.log("Flèche droite cliquée !");
});
