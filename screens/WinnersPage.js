import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SubHeading from "../component/Header/SubHeading";
import PageHeader from "../component/Shared/PageHeader";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const WinnersPage = () => {
  const route = useRoute();
  const { users } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <View style={{ marginHorizontal: 20 }}>
        <PageHeader headerTitle={"Сыйлық иегерлері"} />
        {users.map((user, index) => (
          <View key={index} style={styles.userContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="person-circle-outline" size={24} color="#666" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{user.attributes.Name}</Text>
              <Text style={styles.userEmail}>{user.attributes.email}</Text>
            </View>
            <Image
              source={require("../assets/1.jpg")}
              style={{ width: 80, height: 100 , resizeMode:'contain'}}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default WinnersPage;

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontFamily: "app-Bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
});
