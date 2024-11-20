const facts = [
    "I am 20 years old and have a passion for exploring mountainous landscapes.",
    "I love hiking and have already visited several mountain ranges.",
    "I am fascinated by the diverse ecosystems found in mountainous regions.",
    "I enjoy capturing the beauty of mountains through photography.",
    "I am planning to conquer a challenging mountain trail next summer."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
