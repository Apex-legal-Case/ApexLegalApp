import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Onboarding2Screen = ({ navigation }) => {
  const router = useRouter();
  const [firmName, setFirmName] = useState("");
  const [selectedSize, setSelectedSize] = useState("1-5");

  const sizes = [
    { label: "50+", sub: "Enterprise", id: "50+" },
    { label: "21-50", sub: "Mid-Size", id: "21-50" },
    { label: "6-20", sub: "Boutique", id: "6-20" },
    { label: "1-5", sub: "Partners", id: "1-5" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Firm Setup</Text>
          <Text style={styles.headerStep}>Step 1 of 4</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressBarBg}>
        <View style={styles.progressBarFill} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>Establish Your {"\n"} Firm Profile</Text>
        <Text style={styles.description}>
          Define the foundational identity for your workspace within the Apex
          Legal ecosystem.
        </Text>

        <Text style={styles.label}>FIRM NAME</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="e.g. Sterling & Associates"
            placeholderTextColor="#9CA3AF"
            value={firmName}
            onChangeText={setFirmName}
          />
        </View>

        <Text style={[styles.label, { marginTop: 20 }]}>FIRM SIZE</Text>
        <View style={styles.sizeList}>
          {sizes.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedSize(item.id)}
              style={[
                styles.sizeItem,
                selectedSize === item.id && styles.sizeItemActive,
              ]}
            >
              <Text
                style={[
                  styles.sizeLabel,
                  selectedSize === item.id && styles.whiteText,
                ]}
              >
                {item.label}
              </Text>
              <Text
                style={[
                  styles.sizeSub,
                  selectedSize === item.id && styles.whiteTextOpacity,
                ]}
              >
                {item.sub}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Ionicons name="lock-closed-outline" size={20} color="#111827" />
            <Text style={styles.infoTitle}>ENCRYPTED DATA</Text>
            <Text style={styles.infoText}>
              Firm identity details are strictly stored and encrypted at rest.
            </Text>
          </View>
          <View style={styles.infoBox}>
            <MaterialCommunityIcons name="sync" size={20} color="#111827" />
            <Text style={styles.infoTitle}>AUTO-SYNC</Text>
            <Text style={styles.infoText}>
              Settings can be modified later in Firm Administration.
            </Text>
          </View>
        </View>

        <Text style={styles.complianceText}>
          This Information Will Be Used For Jurisdictional Reporting And
          Compliance.
        </Text>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push("/onboarding-third")}
        >
          <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableOpacity>
      </ScrollView>
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
  headerTitleContainer: { alignItems: "left" },
  headerTitle: {
    fontSize: 24,
    fontWeight: 600,
    color: "#0F172A",
  },
  headerStep: { fontSize: 18, fontWeight: 400, color: "#6B7280" },
  progressBarBg: {
    height: 8,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 20,
    borderRadius: 100,
    marginTop: 5,
  },
  progressBarFill: {
    width: "25%",
    height: 8,
    backgroundColor: "#2563EB",
    borderRadius: 100,
  },

  scrollContent: { paddingHorizontal: 30, paddingTop: 30, paddingBottom: 40 },
  mainTitle: {
    fontSize: 32,
    fontWeight: 600,
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    fontWeight: 500,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 40,
  },

  label: {
    fontSize: 18,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 10,
    letterSpacing: 1,
  },
  inputContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: "#111827",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
  },
  input: { fontSize: 16, color: "#334155" },

  sizeList: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 2,
    overflow: "hidden",
    width: "90%",
    alignSelf: "center",
  },
  sizeItem: {
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  sizeItemActive: { backgroundColor: "#1E3A8A" },
  sizeLabel: { fontSize: 20, fontWeight: "400", color: "#0F172A" },
  sizeSub: { fontSize: 12, fontWeight: "400", color: "#334155" },
  whiteText: { color: "white" },
  whiteTextOpacity: { color: "white", opacity: 0.7 },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginTop: 30,
    width: "90%",
    alignSelf: "center",
  },
  infoBox: {
    width: "40%",
    height: 120,
    borderWidth: 3,
    borderColor: "#94A3B8",
    padding: 12,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9",
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 300,
    marginVertical: 5,
    color: "#334155",
  },
  infoText: {
    fontSize: 12,
    fontWeight: 300,
    color: "#64748B",
    lineHeight: 14,
    textAlign: "center",
  },

  complianceText: {
    textAlign: "center",
    color: "#1F2937",
    fontSize: 13,
    fontWeight: "400",
    marginTop: 30,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "#3B82F6",
    height: 50,
    width: 150,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  continueText: { color: "white", fontWeight: "bold", fontSize: 16 },
});

export default Onboarding2Screen;
