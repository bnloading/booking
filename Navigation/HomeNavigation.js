import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HospitalDoctors from "../screens/HospitalDoctors";
import HospitalDetails from "../screens/HospitalDetails";
import BookApointment from "../screens/BookApointment";
import PaidalyItem from "../component/Paidaly/PaidalyItem";
import BookingSection from "../component/BookApointment/BookingSection";
import WinnersPage from "../screens/WinnersPage";
const Stack = createStackNavigator();
export default function HomeNavigation() {
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DoctorList" component={HospitalDoctors} />
      <Stack.Screen name="hospital-name" component={HospitalDetails} />
      <Stack.Screen name="book-appointment" component={BookApointment} />
      <Stack.Screen name="PaidalyItem" component={PaidalyItem} />
      <Stack.Screen name="Booking" component={BookingSection} />
      <Stack.Screen name="Winners" component={WinnersPage}/>
    </Stack.Navigator>
  );
}
