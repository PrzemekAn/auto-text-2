// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1...', 'tekst2..', 'tekst3.']
let letterIndex = 0;
let wordIndex = 0;
// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    spnText.textContent += txt[wordIndex][letterIndex];
    letterIndex++;

    if (letterIndex > txt[wordIndex].length) {
        letterIndex = 0;
        wordIndex++;
        spnText.textContent = '';

    }

    if (wordIndex == txt.length) {
        spnText.textContent = txt[txt.length - 1];
        clearTimeout(timer);
    }
    const timer = setTimeout(addLetter, 150);


}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);