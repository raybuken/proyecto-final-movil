import { StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { team } from "../data/team";
import MemberList from "../components/MemberList";

export default function Page() {
  return (
    <MainLayout>
      <View style={styles.container}>
          <Text style={styles.title}>{team.groupName}</Text>
          <MemberList members={team.members} />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
