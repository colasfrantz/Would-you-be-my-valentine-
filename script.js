const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const questionContainer = document.getElementById("question-container");
const mainGif = document.getElementById("main-gif");
const mainTitle = document.getElementById("title");

noBtn.addEventListener("mouseover", () => {

    noBtn.style.position = "absolute";
    
    // Calculer les limites de mouvement (Largeur boîte - Largeur bouton)
    const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
    const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;

    // Générer des coordonnées aléatoires dans ces limites
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    // Appliquer les nouvelles positions
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});


yesBtn.addEventListener("click", () => {
    const successSound = document.getElementById("success-sound");
    
    mainTitle.innerHTML = "YIPPIIIIII !!!";
    
    mainGif.src = "https://lemagduchat.ouest-france.fr/images/dossiers/2025-05/chat-amoureux-062121.jpg";
    
    successSound.volume = 0.5;
    successSound.play();

    noBtn.style.display = "none";
});