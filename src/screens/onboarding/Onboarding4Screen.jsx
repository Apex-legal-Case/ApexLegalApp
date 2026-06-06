import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Onboarding4Screen = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("Johnathan Miller, Esq.");
  const [email, setEmail] = useState("jmiller@firm.legal");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Profile Setup</Text>
          <Text style={styles.headerStep}>Step 3 of 4</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressBarBg}>
        <View style={styles.progressBarFill} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.mainTitle}>Profile Configuration</Text>
          <Text style={styles.description}>
            Verify your identity and set up your professional credentials for
            the LexDesk platform.
          </Text>

          <View style={styles.photoSection}>
            <Image
              source={require("../../../assets/ResourceImages/profilePic.png")}
              style={styles.profileImage}
            />
            <View style={styles.photoTextContainer}>
              <Text style={styles.photoLabel}>Profile Photo</Text>
              <Text style={styles.photoSub}>
                Recommended: Square JPEG or PNG, min. 400x400px
              </Text>

              <TouchableOpacity style={styles.uploadButton}>
                <Feather name="upload" size={16} color="#111827" />
                <Text style={styles.uploadButtonText}>Choose File</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={[styles.input, styles.disabledInput]}
                value={email}
                editable={false}
              />
              <Text style={styles.inputSub}>
                Pre-filled from firm invitation
              </Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="+1 (555) 000-0000"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Bio (Optional)</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Brief summary for internal case records..."
                placeholderTextColor="#9CA3AF"
                multiline={true}
                numberOfLines={4}
                value={bio}
                onChangeText={setBio}
              />
            </View>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => router.push("/onboarding-fifth")}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 50,
    gap: 27,
  },
  headerTitleContainer: { alignItems: "start" },
  headerTitle: { fontSize: 24, fontWeight: 600, color: "#111827" },
  headerStep: { fontSize: 18, fontWeight: 500, color: "#6B7280" },
  progressBarBg: {
    height: 8,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 20,
    borderRadius: 100,
    marginTop: 5,
  },
  progressBarFill: {
    width: "75%",
    height: 8,
    backgroundColor: "#2563EB",
    borderRadius: 100,
  },

  scrollContent: { paddingHorizontal: 30, paddingTop: 30, paddingBottom: 40 },
  mainTitle: {
    fontSize: 32,
    fontWeight: 600,
    color: "#111827",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 40,
    fontWeight: 500,
  },

  // Photo Section
  photoSection: { alignItems: "center", marginBottom: 30 },
  profileImage: { width: 120, height: 120, borderRadius: 0, marginBottom: 15 },
  photoTextContainer: { alignItems: "start" },
  photoLabel: { fontSize: 16, color: "#0F172A", marginBottom: 5 },
  photoSub: {
    fontSize: 16,
    color: "#0F172A",
    textAlign: "start",
    width: 200,
    lineHeight: 18,
    marginBottom: 15,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#111827",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    width: 150,
    justifyContent: "center",
    alignSelf: "center",
  },
  uploadButtonText: { marginLeft: 8, fontWeight: "600", color: "#111827" },

  // Form Styles
  form: { width: "100%", marginBottom: 40 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 18, color: "#4B5563", marginBottom: 8 },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#111827",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#111827",
    backgroundColor: "#F1F5F9",
  },
  disabledInput: {
    backgroundColor: "#F3F4F6",
    borderColor: "#D1D5DB",
    color: "#6B7280",
  },
  inputSub: { fontSize: 12, color: "#9CA3AF", marginTop: 5 },
  textArea: { height: 100, textAlignVertical: "top", paddingTop: 15 },

  // Buttons
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  backButton: {
    width: "45%",
    height: 55,
    borderWidth: 1,
    borderColor: "#1D4ED8",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: { color: "#1D4ED8", fontWeight: "bold", fontSize: 18 },
  continueButton: {
    width: "45%",
    height: 55,
    backgroundColor: "#1D4ED8",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButtonText: { color: "white", fontWeight: "bold", fontSize: 18 },
});

export default Onboarding4Screen;
