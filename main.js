
document.addEventListener("DOMContentLoaded", function () {
    const gameBoard = document.getElementById("gameBoard");
    let currentPlayer = "X";
    let isGameOver = false;

    // Initialize the game board
    function initializeBoard() {
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("click", () => makeMove(cell));
            gameBoard.appendChild(cell);
        }
    }

    // Handle player moves
    function makeMove(cell) {
        if (!isGameOver && cell.textContent === "") {
            cell.textContent = currentPlayer;
            if (checkForWin()) {
                announceWinner();
            } else if (checkForTie()) {
                announceTie();
            } else {
                switchTurn();
            }
        }
    }

    // Check for a win
    function checkForWin() {
        const cells = document.querySelectorAll(".cell");
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return cells[a].textContent !== "" &&
                   cells[a].textContent === cells[b].textContent &&
                   cells[a].textContent === cells[c].textContent;
        });
    }

    // Check for a tie
    function checkForTie() {
        const cells = document.querySelectorAll(".cell");
        return Array.from(cells).every(cell => cell.textContent !== "");
    }

    // Switch turns between X and O
    function switchTurn() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // Announce the winner
    function announceWinner() {
        
        alert(`Player ${currentPlayer} wins!`);
        replay();
    }

    // Announce a tie
    function announceTie() {
         
        alert("It's a tie!");
        replay();
    }

    function replay()
    {
        var rs = confirm("Do you want to Replay");
        if(rs)
        {
            window.location.reload();
        }
        else{
            isGameOver = true;
            window.close();
        }
    }

    // Start the game
    initializeBoard();
});
