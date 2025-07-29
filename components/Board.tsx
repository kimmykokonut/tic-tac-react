import { StyleSheet, View } from "react-native";
import Square from "./Square";

export default function Board() {
  return (
    <View>
      <View style={styles.row}>
        <Square />
        <Square />
        <Square />
      </View>
      <View style={styles.row}>
        <Square />
        <Square />
        <Square />
      </View>
      <View style={styles.row}>
        <Square />
        <Square />
        <Square />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
