import { View, Text, FlatList, ScrollView,StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "./ActionButton";
import { Video } from "expo-av";

const HospitalInfo = ({ hospital }) => {
  return (
    <></>
    // hospital && (
    //   <ScrollView>
    //     <View>
    //       <Text style={{ fontSize: 23, fontFamily: "app-Semi" }}>
    //         {hospital.attributes.Name}
    //       </Text>
    //       <FlatList
    //         horizontal={true}
    //         data={hospital.attributes.categories.data}
    //         renderItem={({ item }) => (
    //           <View style={{}}>
    //             <Text
    //               style={{
    //                 marginRight: 5,
    //                 color: "gray",
    //                 fontSize: 9,
    //                 textAlign: "center",
    //               }}
    //             >
    //               {item.attributes.Name},
    //             </Text>
    //           </View>
    //         )}
    //       />
    //       <View
    //         style={{
    //           borderBottomWidth: 0.5,
    //           borderColor: "rgba(0,0,0,0.4)",
    //           margin: 5,
    //           marginBottom: 10,
    //         }}
    //       >
    //         <View
    //           style={{
    //             display: "flex",
    //             flexDirection: "row",
    //             gap: 5,
    //             alignItems: "center",
    //             marginTop: 6,
    //           }}
    //         >
    //           {/* {<Ionicons name="location" size={24} color="blue" />
    //           <Text style={{ fontSize: 16, color: "gray" }}>
    //             {hospital.attributes.Adress}
    //           </Text>} */}
    //         </View>
    //         <View
    //           style={{
    //             display: "flex",
    //             flexDirection: "row",
    //             gap: 5,
    //             alignItems: "center",
    //             marginTop: 6,
    //           }}
    //         >
              
    //         </View>
    //       </View>
    //       <View style={styles.container}>
    //       {hospital.attributes.Video.data.length > 0 && (
    //         <Video
    //           style={styles.video}
    //           source={{
    //             uri: hospital.attributes.Video.data[0].attributes.url,
    //           }}
    //           useNativeControls
    //           resizeMode="contain"
    //           isLooping
    //         />
    //       )}
    //     </View>
    //     </View>
    //     <ActionButton hospital={hospital} />
    //   </ScrollView>
   // )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 320,
    height: 200,
  },
});

export default HospitalInfo;
