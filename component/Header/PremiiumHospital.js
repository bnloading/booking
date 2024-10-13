import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "./SubHeading";
import GlobalApi from "../../Services/GlobalApi";
import HospitalItem from "./HospitalItem";

export default function PremiiumHospital() {
  const [hospitalList, setHospitalList] = useState();
  useEffect(() => {
    getPremium();
  }, []);
  const getPremium = () => {
    GlobalApi.getPremium().then((resp) => {
      setHospitalList(resp.data.data);
    });
  };
  return (
    <View style={{ marginTop: 24, marginHorizontal: 20 }}>
      <Text
        style={{
          color: "black",
          fontSize: 18,
          fontFamily: "SF-Pro",
          fontWeight: 700,
          lineHeight: 30,
          wordWrap: "break-word",
        }}
      >
        {/* Сіздің аймағыңызда танымал{" "} */}
      </Text>
      {/* <SubHeading subHeadingTitle={"Қысқаша таныстырулар:"} seeAll={false} />
        <FlatList
          horizontal={true}
          data={hospitalList}
          renderItem={({ item, index }) => <HospitalItem hospital={item} />}
        /> */}
    </View>
  );
}
