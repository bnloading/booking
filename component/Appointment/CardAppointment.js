import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const CardAppointment = ({ appointment, onDelete }) => {

  

  return (
    <View
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
      }}
    >
      <Text>Күні:</Text>
      <Text style={{ fontSize: 16, fontFamily: "app-Semi" }}>29.05.2024</Text>
      <Text> Сағат </Text>
      <Text style={{ fontSize: 16, fontFamily: "app-Semi" }}>15:00</Text>

      <View>
        <Image
          source={{
            uri: "https://c1.wallpaperflare.com/preview/937/818/491/stethoscope-doctor-md-medical-health-hospital.jpg",
          }}
          style={{ width: 90, height: 105, borderRadius: 10 }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 15 }}>Ахжол</Text>
        <Text style={{ fontSize: 15 }}>
          <Ionicons name="location" color="blue" size={18} />
          "Тәуелсіздік 52 "
        </Text>
      </View>
    </View>
  );
};

export default CardAppointment;
