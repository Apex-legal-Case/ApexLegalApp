import {
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require("../../../assets/ResourceImages/SplashBackground.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Image
              source={require("../../../assets/ResourceImages/Logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.brandName}>Apex</Text>
          <Text style={styles.brandName}>Legal</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(20, 30, 100, .7)",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: { alignItems: "center" },
  logoBox: {
    padding: 12,
    borderRadius: 15,
    marginBottom: 0,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 41,
    height: 41,
  },
  brandName: {
    color: "white",
    fontSize: 32,
    fontWeight: 600,
    lineHeight: "110%",
    textAlign: "center",
  },
});

export default SplashScreen;
