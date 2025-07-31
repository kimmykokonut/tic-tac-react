import { GameBoard, Player } from "@/app/types/models";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState<GameBoard>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const WINNING_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ] as const;

  const calculateWinner = (squares: GameBoard): Player | null => {
    for (let i = 0; i < WINNING_LINES.length; i++) {
      const [a, b, c] = WINNING_LINES[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(`winner ${squares[a]}`);
        return squares[a] as Player;
      }
    }
    console.log("no winner yet");
    return null;
  };

  const handleSquarePress = (index: number) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const gameIsOver = winner !== null;

  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>{status}</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          <Square onPress={() => handleSquarePress(0)} value={squares[0]} />
          <Square onPress={() => handleSquarePress(1)} value={squares[1]} />
          <Square onPress={() => handleSquarePress(2)} value={squares[2]} />
        </View>
        <View style={styles.row}>
          <Square onPress={() => handleSquarePress(3)} value={squares[3]} />
          <Square onPress={() => handleSquarePress(4)} value={squares[4]} />
          <Square onPress={() => handleSquarePress(5)} value={squares[5]} />
        </View>
        <View style={styles.row}>
          <Square onPress={() => handleSquarePress(6)} value={squares[6]} />
          <Square onPress={() => handleSquarePress(7)} value={squares[7]} />
          <Square onPress={() => handleSquarePress(8)} value={squares[8]} />
        </View>
      </View>
      {/* Button to play again */}
      {gameIsOver && (
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetButtonText}>Play Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    borderWidth: 3,
    borderColor: "#333",
    borderRadius: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  statusContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  resetButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  resetButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
