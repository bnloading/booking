import { View, Text, Image } from "react-native";
import React from "react";

export default function HospitalItem(props) {
  return (
    <View style={{ width: 200, marginRight: 10 }}>
      <Image
        source={{ uri: props.hospital.attributes.Image.data.attributes.url }}
        style={{ width: 140, height: 180 }}
      />
      <View style={{}}>
        <Text style={{ fontFamily: "app-Semi", fontSize: 16 }}>
          {props.hospital.attributes.Name}
        </Text>
        <Text style={{ color: "gray" }}>
          {props.hospital.attributes.Adress}
        </Text>
      </View>
    </View>
  );
}
