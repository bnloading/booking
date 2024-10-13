import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import SubHeading from "../Header/SubHeading";
import GlobalApi from "../../Services/GlobalApi";
import PageHeader from "../Shared/PageHeader";
const Paidaly = () => {
  const navigation = useNavigation();
  const [sliderHero, setSliderHero] = useState(null);

  useEffect(() => {
    getHero();
  }, []);

  const getHero = () => {
    GlobalApi.getHero().then((resp) => {
      setSliderHero(resp.data.data);
    });
  };
  return (
    <ScrollView>
    <View style={{ marginHorizontal: 20 , gap:20, marginTop:20}}>
      <PageHeader headerTitle={"Қысқаша мағлұматтар"}  />
    
      <FlatList
        data={sliderHero}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PaidalyItem", {
                categoryName: item.attributes.Name,
                image: item.attributes.Icon.data.attributes.url,
              });
            }}
            style={{ alignItems: "center", marginTop: 20 }}
          >
          <View style={{width:"100%", height:150, backgroundColor:'rgba(211,231,255,1)', borderRadius:28, alignItems:"center"}}>
          <View
              style={{
                padding: 35,
                resizeMode: "cover",
                backgroundColor: "rgba(211,231,255,1)",
                borderRadius: 999,
              }}
            >
              <Image
                source={{ uri: item.attributes.Icon.data.attributes.url }}
                style={{
                  height: 70,
                  width: 70,
                  resizeMode: "contain",
                  marginHorizontal: 8,
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  textAlign: "center",
                  width: 90,
                  fontFamily: "app-Semi",
                }}
              >
                {item.attributes.Name}
              </Text>
            </View>
          </View>
            
          </TouchableOpacity>
        )}
      />
    </View>

    </ScrollView>
    
  );
};

export default Paidaly;

const styles = StyleSheet.create({});
