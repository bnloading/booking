import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Doctors from "../component/Hospital/Doctors";
import GlobalApi from "../Services/GlobalApi";
import HospitalListBig from "../component/Hospital/HospitalListBig";
const Expolores = () => {
  const [getHospital, setGetHospital] = useState([]);
  const [activeTab, setActiveTab] = useState("Hospital");
  console.log(GlobalApi.getAllHospital());
  const getAllHospital = () => {
    GlobalApi.getAllHospital().then((resp) => setGetHospital(resp.data.data));
  };
  useEffect(() => {
    activeTab == "Hospital" ? getAllHospital() : null;
  }, [activeTab]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontFamily: "app-Semi" }}>Кинолар</Text>
      <Doctors activeTab={(value) => setActiveTab(value)} />
      {!getHospital?.length ? (
        <ActivityIndicator size={"large"} color={"gray"} />
      ) : activeTab == "Hospital" ? (
        <HospitalListBig getHospital={getHospital} />
      ) : (
        null
      )}
    </View>
  );
};

export default Expolores;

const styles = StyleSheet.create({});
