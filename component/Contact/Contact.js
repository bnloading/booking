import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ContactInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Мекенжай</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            Темірбек Жүргенов, 18{"\n"}Ақмола, Астана қ.
          </Text>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require("../../assets/share.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Телефон</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>+7 (707) 106 35-46</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require("../../assets/Phone.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Жұмыс сағаты</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            Сейсенбі-Жұма{"\n"}10:00-22:00 дейін
          </Text>
          <Feather name="chevron-right" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Вебсайт</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>www.personaspa.kz</Text>
          <Feather name="chevron-right" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Feather name="instagram" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Feather name="message-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Брон жасау</Text>
      </TouchableOpacity>

      <Text style={styles.footnote}>Ертеңге сағат 15:00 бос орын бар</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 40,
  },
  infoSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 17,
    color: "black",
    marginBottom: 4,
    fontWeight: "700",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoText: {
    fontSize: 15,
    color: "#3C3C4399",
  },
  iconButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
    width: 57,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  socialButton: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 24,
    marginHorizontal: 8,
  },
  bookButton: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footnote: {
    textAlign: "center",
    color: "#888",
    fontSize: 14,
  },
});

export default ContactInfo;
