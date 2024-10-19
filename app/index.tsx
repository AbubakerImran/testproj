import { Text, View } from "react-native";

type familymember = {
  name: string;
};

const Family = (props: familymember) => {
  return (
    <View>
      <Text>Hello! I am {props.name}</Text>
    </View>
  );
};

const member = () => {
  return (
    <View>
      <Family name="Imran" />
      <Family name="Abubaker" />
    </View>
  );
};

export default member;