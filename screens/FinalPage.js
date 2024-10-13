import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const FinalPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.pop(4)}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Бізбен брондағаныңыз үшін рақмет.</Text>
        <Text style={styles.subtitle}>
          Сіздің брондыңыз салонға сәтті жазылды.
        </Text>

        <View style={styles.bookingInfo}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>P</Text>
          </View>
          <View style={styles.bookingDetails}>
            <Text style={styles.bookingTitle}>Брондау</Text>
            <Text style={styles.businessName}>PERSON SPA</Text>
            <View
              style={{
                marginTop: 24,

                marginLeft: -40,
              }}
            >
              <Text style={styles.bookingDate}>
                Дүйсенбі, Желтоқсан 31, 2023
              </Text>
              <Text style={styles.bookingTime}>Сағат 10:30</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Күнтізбеге қосу</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Бронды қайта жоспарлау</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Бронды болдырмау</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
  },
  bookingInfo: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    width: "100%",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  bookingDetails: {
    flex: 1,
  },
  bookingTitle: {
    fontSize: 17,
    fontWeight: "400",
    marginBottom: 4,
    color: "#3C3C4399",
  },
  businessName: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bookingDate: {
    fontSize: 17,
    color: "black",
    textAlign: "center",
    fontWeight: "600",
  },
  bookingTime: {
    fontSize: 17,
    color: "black",
    textAlign: "center",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    padding: 16,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkButton: {
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  linkButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FinalPage;
