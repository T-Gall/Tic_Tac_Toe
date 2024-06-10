// Tic Tac Toe
class Agent {
    constructor() {

    }

    minimax(board, isMaximizing) {
        var gameOver = board.gameOver();
        if (gameOver !== 0) {
            return [gameOver === 1 ? 1 : gameOver === 2 ? -1 : 0, null];
        }

        var bestScore = isMaximizing ? -Infinity : Infinity;
        var move;

        for (var i = 0; i < board.cells.length; i++) {
            if (board.cellFree(i + 1)) {
                var newBoard = board.clone();
                newBoard.move(i + 1);
                var score = this.minimax(newBoard, !isMaximizing)[0];
                if (isMaximizing) {
                    if (score > bestScore) {
                        bestScore = score;
                        move = i + 1;
                    }
                } else {
                    if (score < bestScore) {
                        bestScore = score;
                        move = i + 1;
                    }
                }
            }
        }
        return [bestScore, move];

    }

    selectMove(board) {
        var result = this.minimax(board, board.playerOne);
        return result[1];
        // // Define the initial best score and move
        // var maxScore = -Infinity;
        // var maxMove = null;
        //
        // var minScore = Infinity;
        // var minMove = null;
        //
        // // Loop through each cell to evaluate the best move
        // for (var i = 0; i < board.cells.length; i++) {
        //     var cell = i + 1;
        //     if (board.cellFree(cell)) {
        //         // Make a move on the current cell
        //         var newBoard = board.clone();
        //         newBoard.move(cell);
        //
        //         // Calculate the score for the current move
        //         var score = this.minimax(newBoard, !board.playerOne);
        //
        //         // Update the best move if the current move has a higher score
        //         if (score > maxScore) {
        //             maxScore = score;
        //             maxMove = cell;
        //         }
        //         if (score < minScore) {
        //             minScore = score;
        //             minMove = cell;
        //         }
        //     }
        // }
        //
        // return board.playerOne ? maxMove : minMove;
    }

}