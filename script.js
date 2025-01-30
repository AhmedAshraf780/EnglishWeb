// Load saved data from localStorage
const savedData = JSON.parse(localStorage.getItem("englishLearningData")) || {
    "sentences": [
    ],
    "phrasal-verbs": [
    ],
    "idioms": [
    ]
};

// Track current category
let currentCategory = "";

// Function to display content
function showCategory(category) {
    currentCategory = category;
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = `<h2>${category.replace("-", " ")}</h2><ul class="${category}">` +
        savedData[category].map(item => `<li>${item}</li>`).join("") +
        `</ul>`;
}

// Function to add a new item
function addNewItem() {
    const inputField = document.getElementById("new-item");
    const newItem = inputField.value.trim();

    if (newItem && currentCategory) {
        savedData[currentCategory].push(newItem); // Add to the list
        localStorage.setItem("englishLearningData", JSON.stringify(savedData)); // Save in localStorage
        inputField.value = ""; // Clear input
        showCategory(currentCategory); // Refresh the list
    }
}
// Load saved phrases
document.addEventListener("DOMContentLoaded", function() {
    const savedPhrases = JSON.parse(localStorage.getItem("phrases")) || [];
    savedPhrases.forEach(phrase => addPhraseToUI(phrase));
});

// Function to add phrase
function addPhrase() {
    const input = document.getElementById("phraseInput");
    const phrase = input.value.trim();
    if (phrase) {
        addPhraseToUI(phrase);
        savePhrase(phrase);
        input.value = ""; // Clear input field
    }
}

// Add to UI
function addPhraseToUI(phrase) {
    const list = document.getElementById("phraseList");
    const li = document.createElement("li");
    li.textContent = phrase;
    list.appendChild(li);
}

// Save to localStorage
function savePhrase(phrase) {
    const savedPhrases = JSON.parse(localStorage.getItem("phrases")) || [];
    savedPhrases.push(phrase);
    localStorage.setItem("phrases", JSON.stringify(savedPhrases));
}

