const facts = [
    "Gorillas have unique nose prints, much like human fingerprints!",
    "They share about 98% of their DNA with humans.",
    "A group of gorillas is called a 'troop' or a 'band'.",
    "Adult male gorillas are known as silverbacks because of the silver hair on their backs.",
    "Gorillas are actually quite shy and peaceful, despite their size."
];

const btn = document.getElementById('fact-btn');
const display = document.getElementById('fact-display');

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    display.textContent = facts[randomIndex];
    
    // Simple fade-in effect via JS
    display.style.opacity = 0;
    setTimeout(() => {
        display.style.opacity = 1;
    }, 10);
});
