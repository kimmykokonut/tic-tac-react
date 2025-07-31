import { SquareProps } from "@/app/types/models";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Square({ value, onPress }: SquareProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.square}>
      <Text style={styles.text}>{value}</Text>
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
