import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { COLORS } from "../../constants/theme";

const Onboarding3Screen = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Role Setup</Text>
          <Text style={styles.headerStep}>Step 2 of 4</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressBarBg}>
        <View style={styles.progressBarFill} />
      </View>

      <View style={styles.content}>
        <Text style={styles.mainTitle}>Your Role</Text>
        <Text style={styles.description}>
          Select the primary professional capacity you will maintain within
          LexDesk to tailor your workspace experience.
        </Text>

        <View style={styles.roleCard}>
          <View style={styles.cardHeader}>
            <Image
              source={require("../../../assets/ResourceImages/law.png")}
              style={{ width: 23, height: 23 }}
              resizeMode="contain"
            />
            <Text style={styles.roleTitle}>Lawyer</Text>
          </View>

          <View style={styles.cardBody}>
            <Text style={styles.roleDescription}>
              Directs case strategy, executes legal filings, and provides
              authoritative counsel to clients.
            </Text>

            <View style={styles.checkCircle}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setIsChecked(!isChecked)}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.checkbox,
                    isChecked && styles.checkboxSelected,
                  ]}
                >
                  {isChecked && (
                    <Ionicons name="checkmark" size={20} color="white" />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.prevButton}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={18} color="#2563EB" />
              <Text style={styles.prevButtonText}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => router.push("/security-setup")}
            >
              <Text style={styles.nextButtonText}>Next</Text>
              <Ionicons name="arrow-forward" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    gap: 27,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 50,
  },
  headerTitleContainer: { alignItems: "start" },
  headerTitle: { fontSize: 24, fontWeight: 500, color: "#111827" },
  headerStep: { fontSize: 18, fontWeight: 500, color: "#6B7280" },
  progressBarBg: {
    height: 8,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 20,
    borderRadius: 100,
    marginTop: 5,
  },
  progressBarFill: {
    width: "50%",
    height: 8,
    backgroundColor: "#2563EB",
    borderRadius: 100,
  },

  content: { flex: 1, paddingHorizontal: 30, paddingTop: 40 },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    fontWeight: "500",
    color: "#334155",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
    width: "80%",
    alignSelf: "center",
  },

  roleCard: {
    backgroundColor: "#EFF6FF",
    borderRadius: 4,
    padding: 24,
    borderWidth: 1,
    borderColor: "#DBEAFE",
    marginBottom: 40,
    position: "relative",
    height: 200,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  roleTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginLeft: 15,
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20%",
  },
  roleDescription: {
    flex: 1,
    fontSize: 16,
    color: "#1E3A8A",
    lineHeight: 22,
    paddingRight: 20,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: "#C4C7C7",
    paddingTop: 20,
    alignSelf: "center",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "20%",
    paddingBottom: 40,
    width: "100%",
    alignSelf: "center",
  },
  prevButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1D4ED8",
    paddingHorizontal: 25,
    height: 50,
    borderRadius: 4,
  },
  prevButtonText: {
    color: "#1D4ED8",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 18,
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1D4ED8",
    paddingHorizontal: 35,
    height: 50,
    borderRadius: 4,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
    marginRight: 8,
    fontSize: 18,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  checkbox: {
    borderWidth: 1,
    marginRight: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "transparent",
    borderColor: "#94a3b876",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkboxLabel: {
    fontWeight: 500,
  },
});

export default Onboarding3Screen;
