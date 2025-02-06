document.addEventListener("DOMContentLoaded", function () {
    const openLetterBtn = document.getElementById("openLetterBtn");
    const letter = document.getElementById("letter");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const result = document.getElementById("result");
    const snoopy = document.getElementById("snoopy");
    const heartsContainer = document.getElementById("hearts");

    // Abrir la carta
    openLetterBtn.addEventListener("click", function () {
        letter.classList.remove("hidden");
        openLetterBtn.classList.add("hidden");
        snoopy.style.transform = "scale(1.1)";
    });

    // Respuesta "Sí"
    yesBtn.addEventListener("click", function () {
        result.innerHTML = "🎉 ¡SIUUUU! ¡Sos San Valentín! 💖";
        result.classList.remove("hidden");
        letter.classList.add("hidden");
        createHearts();
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
    });

    // Función para crear corazones animados
    function createHearts() {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "💖";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            heartsContainer.appendChild(heart);
        }
    }
});
