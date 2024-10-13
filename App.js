import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigation/TabNavigation";
import { ClerkProvider, SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import Login from "./screens/Login";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import Home from "../Diplom1/screens/Home";
import HospitalDoctors from "../Diplom1/screens/HospitalDoctors";
import HospitalDetails from "../Diplom1/screens/HospitalDetails";
import BookApointment from "../Diplom1/screens/BookApointment";
import PaidalyItem from "../Diplom1/component/Paidaly/PaidalyItem";
import BookingSection from "../Diplom1/component/BookApointment/BookingSection";
import WinnersPage from "../Diplom1/screens/WinnersPage";
import MastersMain from "./screens/MastersMain";
import Modal2 from "./screens/Modal2";
import BookingPage from "./screens/BookingPage";
import CheckOut from "./screens/CheckOut";
import Modal1 from "./component/Modal/Modal";
import FinalPage from "./screens/FinalPage";

export default function App() {
  const [fontsLoaded] = useFonts({
    "app-Font": require("./assets/fonts/Outfit-Regular.ttf"),
    "app-Semi": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "app-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "app-Thin": require("./assets/fonts/Outfit-Light.ttf"),
    "SF-Pro": require("./assets/fonts/SF-Pro.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const Stack = createStackNavigator();
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_c2VsZWN0ZWQtYnV6emFyZC03Ni5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="CheckOutPage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DoctorList" component={HospitalDoctors} />
          <Stack.Screen name="hospital-name" component={HospitalDetails} />
          <Stack.Screen name="book-appointment" component={BookApointment} />
          <Stack.Screen name="PaidalyItem" component={PaidalyItem} />
          <Stack.Screen name="Booking" component={BookingSection} />
          <Stack.Screen name="Winners" component={WinnersPage} />
          <Stack.Screen name="Masters" component={Modal2} />
          <Stack.Screen name="BookingPage" component={BookingPage} />
          <Stack.Screen name="CheckOutPage" component={CheckOut} />
          <Stack.Screen name="Modal1" component={Modal1} />
          <Stack.Screen name="Final" component={FinalPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import TabNavigation from "./Navigation/TabNavigation";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import { useFonts } from "expo-font";

// export default function App() {
//   const [fontsLoaded, fontError] = useFonts({
//     "app-Font": require("./assets/fonts/Outfit-Regular.ttf"),
//     "app-Semi": require("./assets/fonts/Outfit-SemiBold.ttf"),
//     "app-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
//     "app-Thin": require("./assets/fonts/Outfit-Light.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <ClerkProvider
//       publishableKey={
//         "pk_test_c2VsZWN0ZWQtYnV6emFyZC03Ni5jbGVyay5hY2NvdW50cy5kZXYk"
//       }
//     >
//       <NavigationContainer>
//         <TabNavigation />
//       </NavigationContainer>
//     </ClerkProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 50,
//   },
// });
