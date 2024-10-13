import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Appointment from "../screens/Appointment";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import Expolores from "../screens/Expolores";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Басқы бет"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Кинолар"
        component={Expolores}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="videocam-outline" size={28} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Пайдалы кеңестер"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="reader-outline" size={24} color="black" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Жазылу"
        component={Appointment}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
