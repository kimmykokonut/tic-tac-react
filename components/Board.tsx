import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleSquarePress = (index: number) => {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  };

  return (
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
});
