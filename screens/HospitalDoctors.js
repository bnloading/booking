import { View, Text, SafeAreaView, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../component/Shared/PageHeader";
import Doctors from "../component/Hospital/Doctors"
import HospitalListBig from "../component/Hospital/HospitalListBig";
import GlobalApi from "../Services/GlobalApi";
export default function HospitalDoctors() {
  const [getHospital, setGetHospital] = useState([]);
  const [activeTab, setActiveTab] = useState("Hospital");
  const param = useRoute().params;
  useEffect(() => {
    getHospitalByCategory();
  }, []);
  const getHospitalByCategory = () => {
    GlobalApi.getHospitalByCategory(param?.categoryName).then((resp) =>
      setGetHospital(resp.data.data)
    );
  };
  return (
    <SafeAreaView >
    <ScrollView>
    <View style={{ padding: 0, }}>
        <PageHeader headerTitle={param?.categoryName} />
        <Doctors
          activeTabs={(value) => {
            setActiveTab(value);
          }}
        />
        {!getHospital?.length ? (
          <ActivityIndicator size={"large"} color={"gray"} />
        ) : activeTab == "Hospital" ? (
          <HospitalListBig getHospital={getHospital} />
        ) : (
          <Text>Doctor List</Text>
        )}
      </View>
      
    </ScrollView>
      
    </SafeAreaView>
  );
}
