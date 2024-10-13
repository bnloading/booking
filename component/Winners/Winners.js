import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import GlobalApi from "../../Services/GlobalApi";
import { useNavigation } from "@react-navigation/native";

const Winners = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getWinners();
  }, []);

  const getWinners = () => {
    GlobalApi.getWinners()
      .then((resp) => {
        setUsers(resp.data.data);
        console.log(resp.data.data);
      })
      .catch((error) => {
        console.error("Error fetching winners:", error);
      });
  };
  //{users.map((user, index) => (
  //<Text key={index}>{user.attributes.Name}</Text>
  //))}

  return (
    <View style={{ marginHorizontal: 20, marginTop: 20, padding: 10 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Winners",{ users: users });
        }}
      >
        <Text
          style={{ fontSize: 18, fontFamily: "app-Bold", textAlign: "start" }}
        >
        Отандық киноларды қолдайық!
        </Text>
        <Image
          source={require("../../assets/2.jpg")} // Correctly load the image using require
          style={{
            width: 350,
            height: 200,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Winners;

const styles = StyleSheet.create({});
