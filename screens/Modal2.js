import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "../component/HeaderText/HeaderText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import GlobalApi from "../Services/GlobalApi";
const Modal2 = () => {
  const [masters, setMasters] = useState([]);
  const param = useRoute().params;
  const navigation = useNavigation();
  const route = useRoute();
  const { category, allSelectedItems, selectedItems } = route.params;
  console.log(allSelectedItems);
  useEffect(() => {
    getMasters();
  }, []);
  const getMasters = () => {
    GlobalApi.getMasters().then((resp) => {
      setMasters(resp.data.data);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 18 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              height: 36,
              width: 36,
              backgroundColor: "white",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20,
              marginBottom: 20,
            }}
          >
            <Ionicons name="arrow-back-outline" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.pop(1)}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <HeaderText text1={"Шеберіңізді таңдаңыз"} show={false} />

        {/* <View style={styles.masterItem}>
        <View style={styles.masterCard}>
          <Image
            source={require("../assets/Phone.png")}
            style={styles.masterImage}
          />
        </View>
      </View> */}
        <FlatList
          data={masters}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.masterItem}>
              <View style={styles.masterCard}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("BookingPage", {
                      item: item,
                      category: category,
                      allSelectedItems: allSelectedItems,
                      selectedItems: selectedItems,
                    });
                  }}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  <Image
                    source={{
                      uri: item.attributes.Image.data[0].attributes.url,
                    }}
                    style={styles.masterImage}
                  />
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>5.0</Text>
                    <Image
                      source={require("../assets/star.png")}
                      style={styles.starIcon}
                    />
                  </View>
                  <Text style={styles.masterName}>{item.attributes.Name}</Text>
                  <Text style={styles.masterRole}>{item.attributes.Role}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Modal2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    marginHorizontal: 18,
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: "90%",
  },
  header: {
    flexDirection: "column",
    alignItems: "left",
  },
  backArrow: {
    width: 34,
    height: 34,
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  masterItem: {
    width: "50%",
    padding: 10,
  },
  masterCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  masterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    position: "absolute",
    bottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 2,
  },
  starIcon: {
    width: 12,
    height: 12,
  },
  masterName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  masterRole: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});
