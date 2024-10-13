import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import Header from "../component/Header/Header";
import Search from "../component/Header/Search";
import Slider from "../component/Header/Slider";
import Categories from "../component/Header/Categories";
import PremiiumHospital from "../component/Header/PremiiumHospital";
import Winners from "../component/Winners/Winners";
import { Ionicons } from "@expo/vector-icons";
function Home() {
  const { isLoaded, signOut } = useAuth();
  return (
    <ScrollView>
      <SafeAreaView style={{ }}>

        <Header />

        <Slider />
        <Categories />
      {/* <Winners /> */}
        <PremiiumHospital />
        {/* <Button title="SignOut" onPress={() => signOut()}></Button> <Search setSearchText={(value) => console.log(value)} /> */}
      </SafeAreaView>
      
    </ScrollView>
  );
}
export default Home;
