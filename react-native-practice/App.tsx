import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, ActivityIndicator } from 'react-native';

export default function App(): JSX.Element {
  const [imageURL, setImageURL] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const handleButtonPress = (url: string): void => {
    setLoader(true);
    setImageURL(url);
    setLoader(false);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Test 1"
        onPress={() => handleButtonPress("https://paperandinkprinting.com/wp-content/uploads/2019/08/canstockphoto22402523-arcos-creator.com_-1024x1024.jpg")}
      />
      <Button
        title="Test 2"
        onPress={() => handleButtonPress("https://abtechsolutions.ca/wp-content/uploads/2019/02/Test.png")}
      />
      <Button
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
