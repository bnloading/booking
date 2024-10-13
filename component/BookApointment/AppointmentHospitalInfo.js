import { View, Text, SafeAreaView,Image } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import { Ionicons } from "@expo/vector-icons";
import HorizantalLine from "../Shared/HorizantalLine";

// {hospital } bzde props 
// props bzde componentter arasinda tasimaldau ushin arnalgan 
// <div></div>
const AppointmentHospitalInfo = ({ hospital }) => {
  return (
    <SafeAreaView>
      <PageHeader headerTitle={"Кезекке жазылу"} />
      <View style={{marginTop:10, marginHorizontal:10, display:'flex', flexDirection:'row', gap:15, alignItems:'center'}}>
        <Image
          source={{ uri:hospital.attributes.Image.data.attributes.url }}
          style={{width:100,height:100,borderRadius:99,}}
        />
        
        <View>
        <Text style={{fontSize:18, fontFamily:'app-Semi'}}>{hospital.attributes.Name}</Text>
        <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",marginTop:6
            }}
          >
            <Ionicons name="location" size={24} color="blue" />
            <Text style={{ fontSize: 16, color: "gray" }}>
              {hospital.attributes.Adress}
            </Text>
          </View>

        </View>
        <HorizantalLine/>
         
      </View>
     
    </SafeAreaView>
  );
};

export default AppointmentHospitalInfo;
