import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  Animated,
  Easing,
} from "react-native";
import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import SignInWithOAuth from "../component/SignInWithOAuth";

export default function Login() {
  return (
    <View style={{ alignItems: "center", backgroundColor: "rgba(0,0,0,0.1)" }}>
      <LottieView
        style={{
          height: 300,
          width: 300,
          position: "absolute",
          ...Platform.select({ ios: { height: 400, width: 400 } }),
        }}
        source={require("../assets/1.json")}
        colorFilters={[
          {
            keypath: "button",
            color: "#F00000",
          },
          {
            keypath: "Sending Loader",
            color: "#F00000",
          },
        ]}
        autoPlay
        loop
      />
      <View
        style={{
          backgroundColor: "white",
          padding: 25,
          marginTop: "100%",
          elevatio: 2,
          borderRadius: 28,
          height: "100%",
          alignItems: "center",
          ...Platform.select({
            ios: { marginTop: "140%" },
            elevation: 2, // Corrected typo here
          }),
        }}
      >
        <Text style={styles.heading}>Сәлеметсіз бе👋</Text>
        <Text style={styles.heading}>
          Дәрігерге алдын ала тіркелу қосымшасына қош келдіңіз!
        </Text>
        <Text style={{ marginTop: 20, textAlign: "center" }}>
          Қосымшаға тіркелу арқылы денсаулығыңызға мән беріңіз
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 10,
  },
});
