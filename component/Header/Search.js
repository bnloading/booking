import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

//props-r setSearchText-g damjuulaw
export default function Search({ setSearchText }) {
  const [searchInput, setSearchInput] = useState();
  return (
    <View style={{ marginTop: 15, marginHorizontal: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          borderWidth: 0.6,
          borderColor: "gray",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Ionicons name="search-outline" size={24} color="blue" />
        <TextInput
          placeholder="Іздеу"
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={{ width: "100%", fontWeight: "app-Font" }}
        />
      </View>
    </View>
  );
}
