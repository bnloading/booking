import React, { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import {
  Button,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput,
  View,
} from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

import GlobalApi from "../Services/GlobalApi";

import { useUser } from "@clerk/clerk-expo";
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 16,
        backgroundColor: "rgba(1,71,224,1)",
        width: Dimensions.get("screen").width * 0.8,
        borderRadius: 90,
        marginTop: 40,
      }}
    >
      <Text style={{ color: "white", textAlign: "center", fontWeight: "500" }}>
        Google аккаунт арқылы логин жасаңыз
      </Text>
    </TouchableOpacity>
  );
};
export default SignInWithOAuth;
