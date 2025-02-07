/* Cette boucle ForEach va se baser sur le nombre qui retourne du tableau slides dans la variable index ,
 pour générer autant de boucle */


slides.forEach((_, index) => {
    const bullet = document.createElement("div");
    bullet.classList.add("dot");

    // Ajouter un eventListener sur chaque bullet
    bullet.addEventListener("click", () => {
        currentIndex = index; // Aller directement à l'image correspondante
        updateSlide();
    });

    bulletsContainer.appendChild(bullet);
    bullets.push(bullet);
});

console.log(bullets.length + " élément(s) créé(s) " + bullets)

/////* Cette fonction va changer l’image et le texte affiché */////
/* SYNTHAXE de la fonction 

    * " imageElement.src " permet de changer la source de l'image dans l'attribut src
    * " slides " est le tableau.
    * " [currentIndex] " stock dans la variable, le numéro de l'image est affichée.
    * donc " slides[currentIndex].image " permet de récupérer l'image dans le tableau.
    
*/ 

function updateSlide() {
    imageElement.src = slides[currentIndex].image;
    taglineElement.innerHTML = slides[currentIndex].tagLine;

    // Mettre à jour l'état des bullets points
    bullets.forEach((bullet, index) => {
        bullet.classList.toggle("active", index === currentIndex);
    });
}

/////* Cette fonction arrowLeft.addEventListener permet qu'à chaque clique on change d'image et de texte.*/////
/* SYNTHAXE de la fonction 

    * currentIndex - 1 : Passe à l’image précédente.
    * + slides.length empêche d’avoir un index négatif.
    * % slides.length assure que l'on revient à la fin si on est au début. 
      
*/ 

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
