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
    if (gameOver) return;
    const key = event.key.toUpperCase();
    // Hint: Convert event.key to uppercase
    if (key === "BACKSPACE") {
        deleteLetter();
    } else if (key === "ENTER") {
        submitGuess();
    } else if (key.length === 1 && key >= "A" && key <= "Z") {
        addLetter(key);
    }
    // Hint: Call the appropriate function for each case
});


// TODO: Implement addLetter function
function addLetter(letter) {
    logDebug(`🎯 addLetter("${letter}") called`, 'info');
    if (currentTile >= 5) {
        logDebug("Row is already full!", 'error');
        return;
    }
    const currentRowElement = rows[currentRow];
    const tiles = currentRowElement.querySelectorAll('.tile');
    const currentTileElement = tiles[currentTile];
    currentTileElement.textContent = letter;
    currentTileElement.classList.add('filled');
    currentTile++;
    logDebug('You have just added ' + letter + ' to position ' + currentTile, 'success');
    logDebug('The Current word is:' + getCurrentWord(), 'info');
}

// TODO: Implement deleteLetter function  
function deleteLetter() {
    logDebug(`🗑️ deleteLetter() called`, 'info');
    
if (currentTile <= 0) {
        logDebug("Dummy you've got no letters in there", 'error');
        return;    // TODO: If no letters, log error message and return early
}
    currentTile--;
    const currentRowElement = rows[currentRow];
    const tiles = currentRowElement.querySelectorAll('.tile');
    const tile = tiles[currentTile];
    const deleted = tile.textContent;
    tile.textContent = '';
    tile.classList.remove("filled");
    // TODO: Log what was deleted and from which position
    logDebug('You have just deleted ' + deleted + ' from position ' + currentTile, 'success');
    logDebug('The Current word is:' + getCurrentWord(), 'info');
}


    // TODO: Apply CSS classes to tiles -- we'll do this in the next step
    for (let i = 0; i < 5; i++) {
        tiles[i].className = "tile";
        tiles[i].classList.add(result[i]); 
    }
        return result;
    }
