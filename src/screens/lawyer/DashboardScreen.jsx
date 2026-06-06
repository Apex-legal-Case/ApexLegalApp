import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
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

const DashboardScreen = () => {
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const [isChecked, setIsChecked] = useState(false);
  const urgentTasks = [{ title: "Review brief...", due: "Today, 5:00 PM" }];
  const recentCases = [
    {
      id: "CV-23-019",
      name: "Bank of West Africa v. Adebayo",
      status: "Discovery",
      color: "#0EA5E9",
    },
    {
      id: "CR-23-442",
      name: "State v. Logistics Ltd.",
      status: "Hearing Set",
      color: "#22C55E",
    },
    {
      id: "ARB-22-08",
      name: "TechCorp Merger Dispute",
      status: "Arbitration",
      color: "#F59E0B",
    },
    {
      id: "CV-24-001",
      name: "Okonkwo Estate Settlement",
      status: "Pre-Trial",
      color: "#F87171",
    },
  ];
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title:
        "Review opposing counsel's \nbrief for Bank of West Africa \ncase.",
      due: "Today, 5:00 PM",
      completed: false,
    },
    {
      id: 2,
      title: "Draft preliminary objections \nfor CR-23-442.",
      due: "Tomorrow, 10:00 AM",
      completed: false,
    },
    {
      id: 3,
      title: "Call client regarding \nsettlement offer in ARB-22-08.",
      due: "Overdue",
      completed: false,
    },
    {
      id: 4,
      title: "Submit time entries for \n previous week.",
      due: "Friday, 4:00 PM",
      completed: false,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.topBar}>
        <View style={styles.topBar1}>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/ResourceImages/hamburger.png")}
              style={styles.hamburgerIcon}
            />
          </TouchableOpacity>
          <View style={styles.logoRow}>
            <Image
              source={require("../../../assets/ResourceImages/Logo.png")}
              style={styles.LogoIco}
            />
            <Text style={styles.logoText}>Apex</Text>
          </View>
        </View>
        <View style={styles.topBar2}>
          <View style={styles.topIcons}>
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Image
                source={require("../../../assets/ResourceImages/notification.png")}
                style={styles.notiIcon}
              />
            </TouchableOpacity>
            <Image
              source={require("../../../assets/ResourceImages/profilePic.png")}
              style={styles.avatar}
            />
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>
            <Text style={{ color: "#2563EB" }}>Welcome back,</Text>
            {"\n"}Ifeanyi.
          </Text>
          <Text style={styles.summaryText}>
            You have <Text style={styles.boldText}>3 hearings</Text> this week
            and <Text style={styles.boldText}>8 pending</Text> legal actions.
          </Text>
        </View>

        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>My Active Cases</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsRow}>
            <View
              style={[
                styles.statBox,
                { backgroundColor: "rgba(34, 101, 52, 0.2)" },
              ]}
            >
              <Text style={[styles.statNumber, { color: "#065F46" }]}>12</Text>
              <Text style={[styles.statLabel, { color: "#065F46" }]}>
                Active Litigation
              </Text>
            </View>
            <View
              style={[
                styles.statBox,
                { backgroundColor: "rgba(254, 243, 199, 1)" },
              ]}
            >
              <Text style={[styles.statNumber, { color: "#92400E" }]}>4</Text>
              <Text style={[styles.statLabel, { color: "#92400E" }]}>
                Awaiting Hearing
              </Text>
            </View>
            <View
              style={[
                styles.statBox,
                { backgroundColor: "rgba(254, 226, 226, 1)" },
              ]}
            >
              <Text style={[styles.statNumber, { color: "#991B1B" }]}>3</Text>
              <Text style={[styles.statLabel, { color: "#991B1B" }]}>
                High Priority
              </Text>
            </View>
          </View>

          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { flex: 0.8 }]}>Case ID</Text>
            <Text style={[styles.tableHeaderText2, { flex: 1.5 }]}>
              Matte Name
            </Text>
            <Text
              style={[styles.tableHeaderText2, { flex: 1, textAlign: "start" }]}
            >
              Status
            </Text>
          </View>

          {recentCases.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.caseId}>{item.id}</Text>
              <Text style={styles.matteName} numberOfLines={2}>
                {item.name}
              </Text>
              <View
                style={[
                  styles.statusPill,
                  { backgroundColor: item.color + "20" },
                ]}
              >
                <Text style={[styles.statusText, { color: item.color }]}>
                  {item.status}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.hearingSection}>
          <View style={styles.sectionTitleRow}>
            <Image
              source={require("../../../assets/ResourceImages/hammerBlack.png")}
              style={{ width: 18, height: 19 }}
            />
            <Text style={styles.sectionTitle}>Upcoming Hearings</Text>
          </View>

          <TouchableOpacity style={styles.hearingCardHighlight}>
            <View style={styles.dateSide}>
              <Text style={styles.dateDay}>TMRW</Text>
              <Text style={styles.dateTime}>9:00</Text>
            </View>
            <View style={styles.detailsSide}>
              <Text style={styles.hearingType}>Commercial Hearing</Text>
              <View style={styles.locationRow}>
                <Image
                  source={require("../../../assets/ResourceImages/court.png")}
                  style={{ width: 16, height: 16, marginRight: 3 }}
                />
                <Text style={styles.locationText}>Federal High Court</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hearingCardHighlight2}>
            <View style={styles.dateSide2}>
              <Text style={styles.dateDay2}>OCT 26</Text>
              <Text style={styles.dateTime2}>14:30</Text>
            </View>
            <View style={styles.detailsSide2}>
              <Text style={styles.hearingType2}>Motion Filing</Text>
              <View style={styles.locationRow2}>
                <Image
                  source={require("../../../assets/ResourceImages/court.png")}
                  style={{
                    width: 16,
                    height: 16,
                    marginRight: 3,
                    tintColor: "#44474F",
                  }}
                />
                <Text style={styles.locationText2}>Lagos High Court</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.sectionTitleRow2, { marginTop: 30 }]}>
          <View style={styles.sectionTitleRowSub1}>
            <Image
              source={require("../../../assets/ResourceImages/checkList.png")}
              style={{ width: 21, height: 15, marginRight: 3 }}
            />
            <Text style={styles.sectionTitle}>Urgent Tasks</Text>
          </View>

          <View style={styles.countBadge}>
            <Text style={styles.countText}>5</Text>
          </View>
        </View>

        <View style={styles.taskCard}>
          {tasks.map((item) => (
            <View key={item.id} style={styles.taskItem}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  item.completed && styles.checkboxActive,
                ]}
                onPress={() => toggleTask(item.id)}
              >
                {item.completed && (
                  <Ionicons name="checkmark" size={10} color="white" />
                )}
              </TouchableOpacity>

              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.taskText,
                    item.completed && {
                      textDecorationLine: "line-through",
                      color: "#94A3B8",
                    },
                  ]}
                >
                  {item.title}
                </Text>
                <Text style={styles.taskDue}>Due: {item.due}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../../assets/ResourceImages/dashboardIco.png")}
            style={{ width: 18, height: 18, tintColor: "#3B82F6" }}
          />
          <Text style={[styles.navText, { color: "#2563EB" }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../../assets/ResourceImages/caseIco.png")}
            style={{ width: 20, height: 19, tintColor: "#44474F" }}
          />
          <Text style={styles.navText}>Cases</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../../assets/ResourceImages/calendarIco.png")}
            style={{ width: 18, height: 20, tintColor: "#44474F" }}
          />
          <Text style={styles.navText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../../assets/ResourceImages/reportIco.png")}
            style={{ width: 18, height: 18, tintColor: "#44474F" }}
          />
          <Text style={styles.navText}>Reports</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9FA",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C7C7",
    marginTop: 40,
  },
  topBar1: { flexDirection: "row", alignItems: "center", gap: 10 },
  topBar2: { flexDirection: "row", alignItems: "center", gap: 10 },
  hamburgerIcon: { width: 40, height: 40 },
  LogoIco: { width: 30, height: 30, marginRight: 5 },
  notiIcon: { width: 40, height: 40 },

  logoRow: { flexDirection: "row", alignItems: "center" },
  logoText: { fontSize: 20, fontWeight: "bold", color: "#1E3A8A" },
  topIcons: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 24, height: 24, borderRadius: 17.5 },

  scrollContent: { padding: 25, paddingBottom: 100 },

  welcomeSection: { marginBottom: 25 },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    lineHeight: 38,
  },
  summaryText: { fontSize: 18, color: "#64748B", marginTop: 10 },
  boldText: { fontWeight: "bold", color: "#1E293B" },

  mainCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  cardTitle: { fontSize: 24, fontWeight: "bold", color: "#111827" },
  viewAll: { color: "#1E293B", fontWeight: "600", fontSize: 14 },

  statsRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 25,
    gap: 15,
  },
  statBox: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: { fontSize: 22, fontWeight: "bold" },
  statLabel: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 4,
  },

  tableHeader: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  tableHeaderText: { fontSize: 12, fontWeight: "bold", color: "#94A3B8" },
  tableHeaderText2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  caseId: { flex: 0.8, fontSize: 12, color: "#64748B" },
  matteName: { flex: 1.5, fontSize: 14, fontWeight: "bold", color: "#1E293B" },
  statusPill: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: "center",
  },
  statusText: { fontSize: 11, fontWeight: "bold" },

  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  sectionTitleRow2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  sectionTitleRowSub1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginLeft: 10,
  },
  countBadge: {
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 10,
  },
  countText: { fontSize: 12, fontWeight: "bold", color: "#0000000" },

  hearingCardHighlight: {
    backgroundColor: "#F59E0B",
    borderRadius: 12,
    borderColorLeft: "#000000",
    flexDirection: "row",
    height: 80,
    overflow: "hidden",
    marginBottom: 15,
  },
  hearingCardHighlight2: {
    borderColor: "#E2E8F0",
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    height: 80,
    overflow: "hidden",
    marginBottom: 15,
  },
  dateSide: {
    width: "25%",
    backgroundColor: "rgba(0,0,0,0.05)",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(255,255,255,0.2)",
  },
  dateSide2: {
    width: "25%",
    backgroundColor: "rgba(0,0,0,0.05)",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(255,255,255,0.2)",
  },
  dateDay: { color: "white", fontWeight: "bold", fontSize: 14 },
  dateDay2: { color: "#64748B", fontWeight: "bold", fontSize: 14 },
  dateTime: { color: "white", fontWeight: "bold", fontSize: 16 },
  dateTime2: { color: "#334155", fontWeight: "bold", fontSize: 16 },
  detailsSide: { flex: 1, justifyContent: "center", paddingLeft: 15 },
  detailsSide2: { flex: 1, justifyContent: "center", paddingLeft: 15 },
  hearingType: { color: "white", fontWeight: "bold", fontSize: 16 },
  hearingType2: { color: "#000000", fontWeight: "bold", fontSize: 16 },
  locationRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  locationRow2: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  locationText: { color: "white", fontSize: 12, marginLeft: 5 },
  locationText2: { color: "#000000", fontSize: 12, marginLeft: 5 },

  taskCard: { backgroundColor: "white", borderRadius: 16, padding: 20 },
  taskItem: { flexDirection: "row", marginBottom: 20 },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 4,
    marginRight: 15,
  },
  taskText: { fontSize: 15, color: "#1E293B", fontWeight: "500" },
  taskDue: { fontSize: 12, color: "#94A3B8", marginTop: 4 },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 11, marginTop: 4, color: "#9CA3AF", fontWeight: "600" },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 6,
    marginRight: 15,
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  checkboxActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },
});

export default DashboardScreen;
