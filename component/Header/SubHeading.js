import { View, Text } from "react-native";
import React from "react";

export default function SubHeading({ subHeadingTitle, seeAll = true }) {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom:20
        }}
      >
        <Text style={{ fontFamily: "app-Bold", fontSize: 18 }}>
          {subHeadingTitle}
        </Text>
        {seeAll ? (
          <Text style={{ color: "blue", fontSize: 18 }}>Барлығы</Text>
        ) : null}
      </View>
    </View>
  );
}
