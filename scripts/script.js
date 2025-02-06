function updateSlide() {
    imageElement.src = slides[currentIndex].image;
    taglineElement.innerHTML = slides[currentIndex].tagLine;
}

arrowLeft.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Boucle vers la fin
    updateSlide();
	console.log("Flèche gauche cliquée !" + ", numéro " + currentIndex + " du tableau ");
});

arrowRight.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % slides.length; // Boucle vers le début
    updateSlide();
	console.log("Flèche droite cliquée !" + " numéro " + currentIndex + " du tableau ");
});
