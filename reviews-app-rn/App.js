import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import { useState } from "react";

const getFonts = () =>
  Font.loadAsync({
    poppins: require(".//assets/fonts/Poppins-Black.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({});
