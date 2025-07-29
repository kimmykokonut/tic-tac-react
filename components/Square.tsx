import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Square() {
  return (
    <TouchableOpacity style={styles.square}>
      <Text>X</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#999",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
