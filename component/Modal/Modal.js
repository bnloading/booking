import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Modal1 = (props) => {
  const navigation = useNavigation();
  console.log(props.category.attributes.Adress);

  return (
    <View style={{}}>
      <Modal visible={props.showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
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
          <HeaderText text1="Қызметтер " show={false} />
          {props.renderSlideMenu && props.renderSlideMenu()}
          <ScrollView>
            <View style={styles.modalContent}>
              {props.renderQyzmetter &&
                props.renderQyzmetter(
                  props.selectedTab === 1
                    ? props.qyzmetkerler
                    : props.selectedTab === 2
                    ? props.qyzmetkerler2
                    : props.qyzmetkerler3,
                  props.selectedTab,
                  true // This indicates we're rendering in the modal
                )}
            </View>
          </ScrollView>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryText}>{props.totalPrice}₸ бастап</Text>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ fontSize: 15, color: "#8E8E93" }}>
                  {props.selectedItems} қызмет |
                </Text>
                <Text
                  style={{ fontSize: 15, color: "#8E8E93", marginLeft: 10 }}
                >
                  {props.totalMinutes} минут
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Masters", {
                  category: props.category,
                  allSelectedItems: props.allSelectedItems,
                  selectedItems: props.selectedItems,
                })
              }
            >
              <View style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Жалғастыру</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modal1;

const styles = StyleSheet.create({
  modalContainer: {
    height: "100%",
    backgroundColor: "white",
    paddingTop: 20,
    width: "100%",
    zIndex: 999,
  },
  modalContent: {
    padding: 20,
  },
  summaryContainer: {
    marginLeft: -220,
    marginBottom: -40,
  },
  summaryText: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 24,
    color: "#000",
    textAlign: "left",
  },
  closeButton: {
    marginLeft: 240,
    backgroundColor: "#000",
    width: 141,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});
