import { StyleSheet, View } from "react-native";
import Square from "./Square";

export default function Board() {
  return (
    <View style={styles.board}>
      <View style={styles.row}>
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </View>
      <View style={styles.row}>
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </View>
      <View style={styles.row}>
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
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
