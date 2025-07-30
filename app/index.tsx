import Board from "@/components/Board";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Lets Play! X goes first</Text>
      <Board />
    </View>
  );
}
