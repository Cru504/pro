document.addEventListener("DOMContentLoaded", function () {
    const openLetterBtn = document.getElementById("openLetterBtn");
    const letter = document.getElementById("letter");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const result = document.getElementById("result");
    const snoopy = document.getElementById("snoopy");
    const heartsContainer = document.getElementById("hearts");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const title = document.getElementById("title");

    // Reproducir música de fondo
    backgroundMusic.play();

    // Abrir la carta
    openLetterBtn.addEventListener("click", function () {
        letter.classList.remove("hidden");
        openLetterBtn.classList.add("hidden");
        snoopy.style.transform = "scale(1.2)";
        snoopy.style.transition = "transform 0.5s ease";
    });

    // Respuesta "Sí"
    yesBtn.addEventListener("click", function () {
        result.innerHTML = "🎉 ¡SIIUUUUU! ¡Te quiero! 💖";
        result.classList.remove("hidden");
        letter.classList.add("hidden");
        createHearts();
        title.textContent = "💖 ¡Snoopy Feliz, Mi Amor! 💖";
        snoopy.src = "snoopy_celebratio.png"; // Cambia la imagen de Snoopy
        backgroundMusic.src = "celebration_music.mp3"; // Cambia la música
        backgroundMusic.play();
    });

    // Respuesta "No" (con broma)
    noBtn.addEventListener("mouseover", function () {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "vw";
        noBtn.style.top = Math.random() * 80 + "vh";
    });

    noBtn.addEventListener("click", function () {
        result.innerHTML = "😢 ¡Oh no! Snoopy está triste... Pero sigue intentando. 🐾";
        result.classList.remove("hidden");
        letter.classList.add("hidden");
        snoopy.src = "snoopy_sad.png"; // Cambia la imagen de Snoopy
        backgroundMusic.src = "sad_music.mp3"; // Cambia la música
        backgroundMusic.play();
    });

    // Función para crear corazones animados
    function createHearts() {
        for (let i = 0; i < 100; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💖";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heartsContainer.appendChild(heart);
        }
    }
});
