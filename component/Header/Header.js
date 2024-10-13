import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import GlobalApi from "../../Services/GlobalApi";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigation = useNavigation(); // Get the navigation object

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "gray",
          shadowColor: "#004",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 27,
            fontFamily: "app-Bold",
          }}
        >
          <Ionicons name="leaf" size={24} style={{ marginRight: 10 }} />
          Қазақ фильмдер
        </Text>
      </View>

      <View
        style={{
          position: "fixed",
          display: "flex",
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 7,

            alignItems: "center",
          }}
        >
          <View>
            <Image
              source={{ uri: user.imageUrl }}
              style={{ width: 45, height: 45, borderRadius: 99 }}
            />
          </View>
          <View>
            <Text style={{ fontFamily: "app-Font" }}>Сәлеметсіз 👋</Text>
            <Text style={{ fontSize: 18, fontFamily: "app-Bold" }}>
              {user.fullName}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
