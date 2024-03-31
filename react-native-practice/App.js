import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, ActivityIndicator } from 'react-native';

export default function App() {

  const [imageURL, setImageURL] = useState("");
  const [loader, setLoader] = useState(false);

  const handleButtonPress = (url) => {
    setLoader(true);
    setImageURL(url);
    setLoader(false);
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Test 1"
        onPress={() => handleButtonPress("https://paperandinkprinting.com/wp-content/uploads/2019/08/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg")}
      />
      <Button
        style={styles.button}
        title="Test 2"
        onPress={() => handleButtonPress("https://abtechsolutions.ca/wp-content/uploads/2019/02/Test.png")}
      />
      <Button
        style={styles.button}
        title="Test 3"
        onPress={() => handleButtonPress("https://cdn-icons-png.freepik.com/512/4838/4838856.png")}
      />

      {loader ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Image style={styles.tinyLogo} source={{ uri: imageURL }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
