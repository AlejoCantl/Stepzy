import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Statistics() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View>
        <Text>Estadisticas</Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
