/* --- An adjusted version of:https://www.geeksforgeeks.org/word-guessing-game-using-html-css-and-javascript/?ref=lbp --- */ 

// Array of words and hints to choose from
const words = [
    { word: "cat", hint: "A small domesticated feline (animal)" },
    { word: "dog", hint: "A loyal companion and common pet (animal)" },
    { word: "bird", hint: "A creature with feathers and wings (animal)" },
    { word: "fish", hint: "Lives in water and breathes through gills (animal)" },
    { word: "frog", hint: "An amphibian known for jumping and croaking (animal)" },
    { word: "cow", hint: "Gives us milk and says 'moo' (animal)" },
    { word: "horse", hint: "A four-legged animal you can ride (animal)" },
    { word: "duck", hint: "A bird that loves water and quacks (animal)" },
    { word: "goat", hint: "Known for climbing and eating anything (animal)" },
    { word: "pig", hint: "Says 'oink' and loves mud (animal)" },
    { word: "sheep", hint: "Its wool keeps us warm (animal)" },
    { word: "bunny", hint: "A fluffy animal with long ears (animal)" },
    { word: "ant", hint: "A tiny insect that loves teamwork (animal)" },
    { word: "bee", hint: "Makes honey and buzzes (animal)" },
    { word: "snake", hint: "A slithering reptile (animal)" },
    { word: "turtle", hint: "A slow-moving reptile with a shell (animal)" },
    { word: "lion", hint: "The king of the jungle (animal)" },
    { word: "tiger", hint: "A big cat with orange and black stripes (animal)" },
    { word: "bear", hint: "A large animal that loves honey (animal)" },
    { word: "monkey", hint: "Swings in trees and loves bananas (animal)" },
    { word: "elephant", hint: "The largest land animal with a trunk (animal)" },
    { word: "panda", hint: "A black-and-white bear that eats bamboo (animal)" },
    { word: "giraffe", hint: "The tallest animal with a long neck (animal)" },
    { word: "zebra", hint: "A striped animal resembling a horse (animal)" },
    { word: "kangaroo", hint: "Jumps and carries its baby in a pouch (animal)" },
    { word: "park", hint: "A green area for relaxation and play (public area)" },
    { word: "zoo", hint: "A place where animals are displayed (public area)" },
    { word: "mall", hint: "A large building with lots of shops (public area)" },
    { word: "school", hint: "A place where children learn (public area)" },
    { word: "beach", hint: "A sandy place by the sea (public area)" },
    { word: "playground", hint: "A fun area with swings and slides (public area)" },
    { word: "museum", hint: "A place to see historical artifacts (public area)" },
    { word: "library", hint: "A quiet place with books (public area)" },
    { word: "cafe", hint: "A small place to grab coffee or snacks (public area)" },
    { word: "restaurant", hint: "A place to eat meals (public area)" },
    { word: "market", hint: "A place to buy fresh fruits and vegetables (public area)" },
    { word: "garden", hint: "A place with plants and flowers (public area)" },
    { word: "stadium", hint: "Where sports and events are held (public area)" },
    { word: "train", hint: "A long vehicle that runs on tracks (public area)" },
    { word: "airport", hint: "Where planes take off and land (public area)" },
    { word: "bridge", hint: "Used to cross water or gaps (public area)" },
    { word: "pool", hint: "A place to swim (public area)" },
    { word: "pier", hint: "A structure leading into the water (public area)" },
    { word: "bench", hint: "A seat found in parks (public area)" },
    { word: "street", hint: "A public road in a town or city (public area)" },
    { word: "tower", hint: "A tall building or structure (public area)" },
    { word: "fountain", hint: "A structure with flowing water (public area)" },
    { word: "dock", hint: "A platform for boats (public area)" },
    { word: "shop", hint: "A place to buy items (public area)" },
    { word: "cinema", hint: "A place to watch movies (public area)" },
];
let randomIndex;
let selectedWord;
let selectedHint;
let guessedlist = [];
let displayWord;

// Function to initialize or reset the game
function initializeGame() {
    randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex].word;
    selectedHint = words[randomIndex].hint;
    console.log(selectedWord);

    // Display the hint
    document.getElementById("hint").textContent = selectedHint;

    // Reset the guessed letters and display word
    guessedlist = [];
    displayWord = "";
    for (let i = 0; i < selectedWord.length; i++) {
        displayWord += "_ ";
    }
    document.getElementById("displayWord").textContent = displayWord;

    // Clear the input field
    document.getElementById("letter-input").value = "";
}

// Function to check guessed letter
function guessLetter() {
    let inputElement = document.getElementById("letter-input");

    // Check for empty input
    if (!inputElement.value) {
        alert("Empty input box. Please add a letter.");
        return;
    }

    let letter = inputElement.value.toLowerCase();

    // Clear the input field
    inputElement.value = "";

    // Check if the letter has already been guessed
    if (guessedlist.includes(letter)) {
        alert("You have already guessed that letter!");
        return;
    }

    // Add the letter to the guessed letters array
    guessedlist.push(letter);

    // Update the word display based on guessed letters
    let updatedDisplay = "";
    let allLettersGuessed = true;
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedlist.includes(selectedWord[i])) {
            updatedDisplay += selectedWord[i] + " ";
        } else {
            updatedDisplay += "_ ";
            allLettersGuessed = false;
        }
    }
    document.getElementById("displayWord").textContent = updatedDisplay;

    // Check if all letters have been guessed
    if (allLettersGuessed) {
        alert("Congratulations! You guessed the word correctly!");
    }
}

// Function to reset the game
function resetGame() {
    initializeGame();
}

// Initialize the game when the page loads
initializeGame();