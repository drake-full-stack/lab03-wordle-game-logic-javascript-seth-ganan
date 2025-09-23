// ===== GAME STATE VARIABLES =====
const TARGET_WORD = "WORDS";  // Our secret word for testing
let currentRow = 0;           // Which row we're filling (0-5)
let currentTile = 0;          // Which tile in the row (0-4)
let gameOver = false;         // Is the game finished?

// DOM element references (set up on page load)
let gameBoard, rows, debugOutput;

// ===== HELPER FUNCTIONS (PROVIDED) =====

// Debug/Testing Functions
function logDebug(message, type = 'info') {
    // Log to browser console
    console.log(message);
    
    // Also log to visual testing area
    if (!debugOutput) {
        debugOutput = document.getElementById('debug-output');
    }
    
    if (debugOutput) {
        const entry = document.createElement('div');
        entry.className = `debug-entry ${type}`;
        entry.innerHTML = `
            <span style="color: #666; font-size: 12px;">${new Date().toLocaleTimeString()}</span> - 
            ${message}
        `;
        
        // Add to top of debug output
        debugOutput.insertBefore(entry, debugOutput.firstChild);
        
        // Keep only last 20 entries for performance
        const entries = debugOutput.querySelectorAll('.debug-entry');
        if (entries.length > 20) {
            entries[entries.length - 1].remove();
        }
    }
}

function clearDebug() {
    const debugOutput = document.getElementById('debug-output');
    if (debugOutput) {
        debugOutput.innerHTML = '<p style="text-align: center; color: #999; font-style: italic;">Debug output cleared - ready for new messages...</p>';
    }
}

// Helper function to get current word being typed
function getCurrentWord() {
    const currentRowElement = rows[currentRow];
    const tiles = currentRowElement.querySelectorAll('.tile');
    let word = '';
    tiles.forEach(tile => word += tile.textContent);
    return word;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    gameBoard = document.querySelector('.game-board');
    rows = document.querySelectorAll('.row');
    debugOutput = document.getElementById('debug-output');
    
    logDebug("🎮 Game initialized successfully!", 'success');
    logDebug(`🎯 Target word: ${TARGET_WORD}`, 'info');
    logDebug("💡 Try typing letters, pressing Backspace, or Enter", 'info');
});

// ===== YOUR CHALLENGE: IMPLEMENT THESE FUNCTIONS =====

// TODO: Add keyboard event listener
// document.addEventListener("keydown", (event) => {
document.addEventListener("keydown", (event) => {
    // TODO: Add your code here
    // Hint: Check if game is over first
    // Hint: Convert event.key to uppercase
    // Hint: Handle three cases: BACKSPACE, ENTER, and letters A-Z
    // Hint: Call the appropriate function for each case
});


// TODO: Implement addLetter function
function addLetter(letter) {
    logDebug(`🎯 addLetter("${letter}") called`, 'info');
    
    // TODO: Check if current row is full (currentTile >= 5)
    // TODO: If full, log error message and return early
    // TODO: Get the current row element using rows[currentRow]
    // TODO: Get all tiles in that row using querySelectorAll('.tile')
    // TODO: Get the specific tile using tiles[currentTile]
    // TODO: Set the tile's textContent to the letter
    // TODO: Add the 'filled' CSS class to the tile
    // TODO: Increment currentTile by 1
    // TODO: Log success message with position info
    // TODO: Log current word progress using getCurrentWord()
}


// TODO: Implement deleteLetter function  
function deleteLetter() {
    logDebug(`🗑️ deleteLetter() called`, 'info');
    
    // TODO: Check if there are letters to delete (currentTile <= 0)
    // TODO: If no letters, log error message and return early
    // TODO: Decrement currentTile FIRST (currentTile--)
    // TODO: Get the current row element using rows[currentRow]
    // TODO: Get all tiles in that row using querySelectorAll('.tile')
    // TODO: Get the specific tile to clear using tiles[currentTile]
    // TODO: Store the letter being deleted for logging (tile.textContent)
    // TODO: Clear the tile's textContent (set to empty string '')
    // TODO: Remove the 'filled' class from the tile
    // TODO: Log what was deleted and from which position
    // TODO: Log current word status using getCurrentWord()
}


// TODO: Implement submitGuess function
function submitGuess() {
    logDebug(`📝 submitGuess() called`, 'info');
    
    // TODO: Check if row has exactly 5 letters (currentTile !== 5)
    // TODO: If not 5 letters, show alert and return early
    // TODO: Get the current row element using rows[currentRow]
    // TODO: Get all tiles in that row using querySelectorAll('.tile')
    // TODO: Build the guess string by looping through tiles
    // TODO: Log the guess and target word for debugging
    // TODO: Call checkGuess(guess, tiles) - we'll implement this next!
    // TODO: Move to next row: increment currentRow, reset currentTile to 0
    // TODO: Check win condition: if guess === TARGET_WORD, set gameOver = true
    // TODO: Check lose condition: if currentRow >= 6, set gameOver = true
    // TODO: Show appropriate alert for win/lose (use setTimeout for smoother experience)
    // TODO: Log current game status (won/lost/continuing)
    //This is a test comment
    
}


// TODO: Implement checkGuess function (the hardest part!)
function checkGuess(guess, tiles) {
    logDebug(`🔍 Starting analysis for "${guess}"`, 'info');
    
    // TODO: Split TARGET_WORD and guess into arrays
    const target = // YOUR CODE HERE
    const guessArray = // YOUR CODE HERE
    const result = ['absent', 'absent', 'absent', 'absent', 'absent'];
    
    // STEP 1: Find exact matches
    for (let i = 0; i < 5; i++) {
        if (/* TODO: check if letters match at position i */) {
            result[i] = 'correct';
            // TODO: mark both target[i] and guessArray[i] as used (null)
        }
    }
    
    // STEP 2: Find wrong position matches  
    for (let i = 0; i < 5; i++) {
        if (guessArray[i] !== null) { // only check unused letters
            // TODO: look for guessArray[i] in remaining target letters
            // TODO: if found, mark as 'present' and set target position to null
        }
    }
    
    // TODO: Apply CSS classes to tiles -- we'll do this in the next step
    return result;
}
