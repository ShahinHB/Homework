import React from 'react';
import { StatusBar, Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {

  const showAlert = () => {
    Alert.alert(
      "Test",
      "Test!",
      [
        { text: "OK", onPress: () => console.log("Pressed") }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Test button" onPress={showAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
