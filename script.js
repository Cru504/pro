document.getElementById('openLetterBtn').addEventListener('click', function() {
    document.getElementById('letter').classList.remove('hidden');
    document.getElementById('openLetterBtn').classList.add('hidden');
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('result').innerHTML = "<h2>🥳 ¡Yay! ¡Eres mi San Valentín! 💖</h2>";
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('result').innerHTML = "<h2>😠 ¡Dale al Sí!</h2>";
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('noBtn').style.display = 'none';
});