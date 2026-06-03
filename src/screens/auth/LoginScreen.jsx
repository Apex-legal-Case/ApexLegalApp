import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { COLORS } from "../../constants/theme";

const LoginScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.flexbox}>
              <View style={styles.headerIconBox}>
                <Image
                  source={require("../../../assets/ResourceImages/Logo.png")}
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.headerText}>Apex</Text>
            </View>
            <Text style={styles.headerSubtext}>LEGAL OPERATIONS</Text>
          </View>

          <Text style={styles.title}>Secure Sign In</Text>
          <Text style={styles.subtitle}>
            Enter your credentials to access your legal dashboard.
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>EMAIL ADDRESS</Text>
            <TextInput
              style={styles.input}
              placeholder="attorney@firm.com"
              placeholderTextColor={COLORS.grayText}
            />

            <View style={styles.row}>
              <Text style={styles.label}>PASSWORD</Text>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.passwordContainer}>
              <View style={styles.passwordContainerContent}>
                <TextInput
                  style={styles.flexInput}
                  placeholder="••••••••"
                  secureTextEntry={isPasswordSecure}
                  placeholderTextColor={COLORS.grayText}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordSecure(!isPasswordSecure)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={isPasswordSecure ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setIsChecked(!isChecked)}
              activeOpacity={0.8}
            >
              <View
                style={[styles.checkbox, isChecked && styles.checkboxSelected]}
              >
                {isChecked && (
                  <Ionicons name="checkmark" size={14} color="white" />
                )}
              </View>
              <Text style={styles.checkboxLabel}>
                Remember this device for 30 days
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR CONTINUE WITH</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <View style={styles.googleiconbox}>
              <Image
                source={require("../../../assets/ResourceImages/SVG.png")}
                style={styles.googleicon}
              />
            </View>
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },

  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },

  flexbox: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },

  headerIconBox: {
    padding: 8,
    borderRadius: 8,
    flex: 1,
    marginBottom: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontSize: 32,
    fontWeight: 600,
    fontFamily: "Inter, sans-serif;",
    marginStart: 4,
    color: COLORS.text,
    fontStyle: "bold",
  },

  headerSubtext: {
    fontSize: 12,
    letterSpacing: 1.2,
    color: COLORS.grayText,
    fontWeight: 600,
    fontFamily: "Inter, sans-serif;",
  },

  title: {
    fontSize: 24,
    fontWeight: 600,
    color: COLORS.text,
    marginBottom: 8,
    fontFamily: "Inter, sans-serif;",
  },

  subtitle: {
    textAlign: "center",
    color: COLORS.grayText,
    marginBottom: 32,
    fontSize: 14,
    fontWeight: 300,
    fontFamily: "Inter, sans-serif;",
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 8,
    fontFamily: "Inter, sans-serif;",
  },

  input: {
    height: 50,
    borderWidth: 1,
    fontWeight: 400,
    fontSize: 16,
    paddingStart: 15,
    borderColor: COLORS.border,
    marginBottom: 24,
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  forgotText: {
    fontSize: 12,
    fontWeight: "bold",
    color: COLORS.text,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingStart: 0,
    paddingEnd: 0,
    borderColor: COLORS.border,
    marginBottom: 32,
  },

  passwordContainerContent: {
    flexDirection: "row",
    paddingStart: 15,
    alignItems: "center",
    paddingEnd: 15,
    width: "100%",
  },

  flexInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },

  signInButton: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  signInButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 32,
    width: "100%",
  },

  line: {
    flex: 1,
    height: 1,
    maxWidth: "100%",
    width: 1000,
    backgroundColor: "#334155",
  },

  orText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: COLORS.grayText,
    fontWeight: 400,
  },

  googleButton: {
    width: "100%",
    height: 56,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  googleiconbox: {
    height: 18,
    width: 18,
  },

  googleicon: {
    height: 18,
    width: 18,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  checkboxLabel: {
    fontWeight: 300,
  },

  googleText: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 400,
    color: COLORS.text,
  },
});

export default LoginScreen;
