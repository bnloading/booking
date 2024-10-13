import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import MastersModal from "../../screens/MastersMain";
const HeaderText = ({ text1, show = true, masters }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text1}</Text>
      {show && (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={require("../../assets/Vector.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      <MastersModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        masters={masters}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
  },
  title: {
    color: "black",
    fontSize: 22,
    fontWeight: "700",
  },
  icon: {
    width: 5,
    height: 13,
    marginTop: 12,
  },
});

export default HeaderText;
