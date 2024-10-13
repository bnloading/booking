import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import HospitalCard from "../Shared/HospitalCard";
import { useNavigation } from "@react-navigation/native";

export default function HospitalListBig({ getHospital }) {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 20 }}>
      <FlatList
        data={getHospital}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("hospital-name", { hospital: item });
            }}
          >
            <HospitalCard hospital={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
