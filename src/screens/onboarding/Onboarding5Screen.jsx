import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Onboarding5Screen = () => {
  const router = useRouter();

  const enabledModules = [
    "Case Analytics",
    "Document Drafting",
    "Billing Manager",
    "E-Discovery Hub",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.successIconContainer}>
          <View style={styles.iconBorder}>
            <Image
              source={require("../../../assets/ResourceImages/greenCheck.png")}
              style={styles.greenCheck}
            />
          </View>
        </View>

        <Text style={styles.mainTitle}>Ready to Go</Text>
        <Text style={styles.subtitle}>
          Your Apex Legal profile has been successfully configured. You are now
          equipped with the tools specific to your legal role.
        </Text>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionLabel}>SELECTED ROLE</Text>
        </View>

        <View style={styles.roleDisplay}>
          <View style={styles.roleIconBox}>
            <Image
              source={require("../../../assets/ResourceImages/hammer.png")}
              style={{ width: 48, height: 48 }}
            />
          </View>
          <Text style={styles.roleName}>Senior Litigation{`\n`} Associate</Text>
          <Text style={styles.roleDetails}>
            Litigation Department • Lagos Office
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>CLEARANCE LEVEL</Text>
              <Text style={styles.statValue}>Tier 1 Administrative</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>ACCESS ID</Text>
              <Text style={styles.statValue}>LD-993-2024</Text>
            </View>
          </View>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.listLabel}>ENABLED MODULES</Text>

          <View style={styles.moduleList}>
            {enabledModules.map((item, index) => (
              <View key={index} style={styles.moduleItem}>
                <Feather name="check" size={12} color="#111827" />
                <Text style={styles.moduleText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>
            Environment: {`\n`} Production (Stable)
          </Text>
          <Text style={styles.statusSub}>
            Securely encrypted connection established
          </Text>
          <Text style={styles.statusSub}>Ready for initialization</Text>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/dashboard")}
        >
          <Text style={styles.primaryButtonText}>Launch Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.back()}
        >
          <Text style={styles.secondaryButtonText}>View Profile Details</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContent: {
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 40,
    marginTop: 10,
  },

  successIconContainer: { alignItems: "center", marginBottom: 20 },
  iconBorder: {
    borderRadius: 12,
    padding: 10,
  },
  greenCheck: { width: 80, height: 70 },

  mainTitle: {
    fontSize: 38,
    fontWeight: 600,
    color: "#111827",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    color: "#4B5563",
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    lineHeight: 24,
    fontWeight: 500,
    marginBottom: 40,
  },

  sectionHeader: { alignItems: "center", marginBottom: 15 },
  sectionLabel: {
    fontSize: 24,
    fontWeight: 600,
    color: "#111827",
    letterSpacing: 0.5,
    alignSelf: "center",
  },

  roleDisplay: { alignItems: "center", marginBottom: 40 },
  roleIconBox: {
    padding: 12,
    borderRadius: 4,
    marginBottom: 15,
  },
  roleName: {
    fontSize: 24,
    fontWeight: 600,
    color: "#111827",
    textAlign: "center",
  },
  roleDetails: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 5,
    marginBottom: 20,
  },

  statsRow: { width: "100%", alignItems: "center" },
  statItem: { alignItems: "center", marginBottom: 15 },
  statLabel: {
    fontSize: 16,
    fontWeight: 600,
    color: "#111827",
    marginBottom: 2,
  },
  statValue: { fontSize: 12, color: "#4B5563" },

  listSection: { alignItems: "start", marginBottom: 20 },
  listLabel: {
    fontSize: 24,
    fontWeight: 600,
    color: "#111827",
    alignSelf: "",
    marginBottom: 15,
    paddingLeft: "15%",
  },

  moduleList: { marginBottom: 40, paddingLeft: "15%" },
  moduleItem: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  moduleText: {
    marginLeft: 15,
    fontSize: 18,
    color: "#111827",
    fontWeight: "400",
  },

  statusBox: {
    backgroundColor: "#DBEAFE",
    paddingVertical: 25,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 5,
    textAlign: "center",
  },
  statusSub: { fontSize: 18, color: "#111827", lineHeight: 22 },

  primaryButton: {
    backgroundColor: "#1D4ED8",
    height: 55,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: { color: "white", fontWeight: "bold", fontSize: 18 },

  secondaryButton: {
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButtonText: { color: "#2563EB", fontWeight: "bold", fontSize: 18 },
});

export default Onboarding5Screen;
