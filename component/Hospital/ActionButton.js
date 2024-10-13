import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const ActionButton = ({ category }) => {
  const PhoneIcon = require("../../assets/Phone.png");
  const CommentIcon = require("../../assets/comment.png");
  const ShareIcon = require("../../assets/share.png");

  const actionButtonList = [
    {
      id: 1,
      name: "Брон жасау",
      icon: null,
      text: "Жексенбі 20:00",
    },
    {
      id: 2,
      name: "Қоңырау соғу",
      icon: PhoneIcon,
    },
    {
      id: 3,
      name: "Хат жазу",
      icon: CommentIcon,
    },
    {
      id: 4,
      name: "Бағыттар",
      icon: ShareIcon,
    },
    {
      id: 5,
      name: "Жұмыс сағаты",
      icon: require("../../assets/Vector.png"),
    },
    {
      id: 6,
      name: "Instagram",
      icon: require("../../assets/InstagramLogo.png"),
    },
    {
      id: 7,
      name: "Сілтемелер",
      icon: ShareIcon,
    },
  ];

  return (
    <View style={{ marginTop: 24 }}>
      <FlatList
        data={actionButtonList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          item.id === 1 ? (
            <TouchableOpacity>
              <View
                style={{
                  width: 115,
                  height: 48,
                  backgroundColor: "black", // Set the background color to black for the first item
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <View style={{ marginTop: 8 }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#000000", // Equivalent to 'black'
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 16,
                  }}
                >
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={{ alignItems: "center", marginRight: 8 }}>
              <View
                style={{
                  backgroundColor: "#D1D1D6",
                  borderRadius: 50,
                  alignItems: "center",
                  width: 85,
                  height: 48,
                  marginTop: 0,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Image source={item.icon} style={{ height: 24, width: 24 }} />
              </View>
              <View style={{ marginTop: 8 }}>
                <Text
                  style={{
                    color: "#000000", // Equivalent to 'black'
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 16,
                    textAlign:'center'
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )
        }
      />
      <View style={{borderWidth:1, borderColor:'#C6C6C8', width:"100%", marginTop:24}}>

      </View>
    </View>
  );
};

export default ActionButton;
