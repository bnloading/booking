import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function HospitalCard({ hospital }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            marginBottom: 5,
            width: "100%",
            padding: 0,
            marginLeft: -5,
          }}
        >
          <Image
            source={{ uri: hospital.attributes.Image.data.attributes.url }}
            style={{
              width: 320,
              height: 200,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginHorizontal: 0,
            }}
          />
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: "rgba(0,0,0,0.1)",
              padding: 0,
              margin: 5,
              marginBottom: 10,
              backgroundColor: "white",
              width: "100%",
              height: 80,
              borderRadius: 10,
            }}
          >
            <View style={{ padding: 5, height: 30 }}>
              <Text style={{ fontSize: 18, fontFamily: "app-Semi" }}>
                {hospital.attributes.Name}
              </Text>
            </View>

            <FlatList
              horizontal={true}
              data={hospital.attributes.categories.data}
              renderItem={({ item }) => (
                <View style={{}}>
                  <Text
                    style={{
                      marginTop: -4,
                      padding: 0,
                      marginRight: 7,
                      color: "gray",
                      fontSize: 11,
                      textAlign: "center",
                    }}
                  >
                    {item.attributes.Name},
                  </Text>
                </View>
              )}
            />

            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: "rgba(0,0,0,0.1)",
                margin: 5,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Ionicons name="videocam-outline" size={24} color="black" />
                <Text>{hospital.attributes.Adress}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
