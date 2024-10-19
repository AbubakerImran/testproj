import React from "react";
import { Button, Text, View } from "react-native";
import { Modal, PaperProvider, Portal, Provider } from "react-native-paper";

export default function Index() {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20 };

  return (
    <Provider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Open Modal" onPress={showModal} />
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text>You have opened the modal</Text>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};