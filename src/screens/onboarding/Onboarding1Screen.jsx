import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Onboarding1Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.graphicContainer}>
        <View style={styles.blueCard}>
          <Image
            source={require("../../../assets/ResourceImages/BuildingCard.png")}
            style={styles.buildingImage}
          />
        </View>
      </View>

      <View style={styles.contentSection}>
        <View style={styles.taglineRow}>
          <View style={styles.goldDash} />
          <Text style={styles.taglineText}>SYSTEM INITIALIZATION</Text>
        </View>

        <Text style={styles.headline}>
          Your Firm's New <Text style={styles.blueText}>Foundation</Text> Starts
          Here.
        </Text>

        <Text style={styles.description}>
          You're just a few steps away from building the architecture of your
          modern practice. Let's get your firm set up with structural precision
          and legal-grade accuracy.
        </Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>START FIRM SETUP</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>DATA INTEGRITY</Text>
          <Text style={styles.statValue}>AES-256</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>AVERAGE SETUP</Text>
          <Text style={styles.statValue}>4.2 MINS</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  graphicContainer: {
    flex: 1.2,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  blueCard: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: 81,
  },
  buildingImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  contentSection: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 44,
  },
  taglineRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  goldDash: {
    width: 30,
    height: 2,
    backgroundColor: "#C5A059",
    marginRight: 10,
  },
  taglineText: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: "#1B3A6B",
  },
  headline: {
    fontSize: 32,
    fontWeight: 600,
    color: "#111827",
    lineHeight: 40,
    marginBottom: 20,
  },
  blueText: { color: "#2563EB" },
  description: {
    fontSize: 16,
    fontWeight: 400,
    color: "#4B5563",
    lineHeight: 24,
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: "#1D4ED8",
    flexDirection: "row",
    height: 54,
    width: 220,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: "#CFC4C5",
    paddingTop: 30,
    width: "90%",
    alignSelf: "center",
  },
  statBox: { width: "45%" },
  statLabel: {
    fontSize: 12,
    color: "#5D5E66",
    fontWeight: "bold",
    marginBottom: 10,
  },
  statValue: { fontSize: 20, fontWeight: 600, color: "#000000" },
});

export default Onboarding1Screen;
