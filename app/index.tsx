import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>My name is Abubaker Imran.</Text>
      <Text>My name is RJ.</Text>
      <View>
        <Button mode="outlined">dsdf</Button>
      </View>
    </View>
  );
}
