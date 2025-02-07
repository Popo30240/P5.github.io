/************* VARIABLES GLOBALES **************/

//Constant

const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments HTML

// Permet de retourner tout le contenu de la classe
const imageElement = document.querySelector(".slideImage");
//console.log(imageElement)

// Permet de retourner tout le contenu de la classe
const taglineElement = document.querySelector(".slideText");
//console.log(taglineElement)

// Permet de retourner tout le contenu de la classe
const arrowLeft = document.querySelector(".arrow_left");
//console.log(arrowLeft)

// Permet de retourner tout le contenu de la classe
const arrowRight = document.querySelector(".arrow_right");
//console.log(arrowRight)

// Permet de retourner tout le contenu de la classe
const bulletsContainer = document.querySelector(".dots");
console.log(bulletsContainer)


// Tableau vides des bullets points
const bullets = [];




// variable modifiable 

// Initialise le tableau des slides à 0
let currentIndex = 0; // Index de l'image actuelle