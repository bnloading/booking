import { Image, StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const AboutUs = () => {
  //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
  return (
    <ScrollView>
       <View style={{ gap: 5 }}>
      <Image
        source={{ uri: "https://picsum.photos/536/354" }}
        style={{
          width: 240,
          height: 240,
          marginHorizontal: "20%",
          borderRadius: "150%",
          marginTop: 100,
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontFamily: "app-Bold",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        <Ionicons name="medkit-outline" size={24} color="blue" />
        Клиник
      </Text>
      <View style={{ backgroundColor: "" }}>
        <View></View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.title}>Біз жайлы</Text>
          <Text style={styles.description}>
            Жедел жәрдем - шұғыл медициналық көмек көрсетуге және мұқтаж
            адамдарға тасымалдауға арналған маңызды көліктер. Бұл көліктер
            пациенттерді тұрақтандыру және шұғыл көмек көрсету үшін
            дефибрилляторлар, оттегі цистерналары және бинттерді қоса алғанда,
            бірқатар медициналық жабдықтармен және керек-жарақтармен
            жабдықталған. Жоғары дайындықтан өткен фельдшерлер мен шұғыл
            медициналық техниктерден (EMTs) тұратын жедел жәрдем бригадалары
            пациенттерді ауруханаларға немесе басқа денсаулық сақтау
            мекемелеріне бағалау, емдеу және тасымалдау үшін тынымсыз жұмыс
            істейді.
          </Text>
          <Text style={{ fontSize: 24, fontFamily: "app-Bold" }}>
            Қосымша өңделуде..............
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
   
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 10,
  },
});
