import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function PageHeader({ headerTitle, backButton=true}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
     
    
        marginTop: 16,
        marginLeft:16
      }}
    >
      {backButton?<TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require("../../assets/Frame 22.png")} style={{width:40, height:40}}/>
      </TouchableOpacity>:null}

  
    </View>
  );
}
