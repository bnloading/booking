import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import HeaderText from "../component/HeaderText/HeaderText";

const CheckOut = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [buttonText, setButtonText] = useState("Қосу");
  const {
    selectedData,
    selectedTime,
    item,
    category,
    allSelectedItems,
    selectedItems,
  } = route.params;

  const totalPrice = Object.values(allSelectedItems).reduce((total, item) => {
    return total + (item.price || 0);
  }, 0);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back-outline" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.pop(3)}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <HeaderText text1={"Қарап шығу және растау"} show={false} />
      <View style={styles.categoryInfo}>
        <Image
          source={require("../assets/Logo.png")}
          style={styles.categoryLogo}
        />
        <View style={styles.categoryTextContainer}>
          <Text style={styles.categoryName}>{category.attributes.Name}</Text>
          <Text style={styles.categoryAddress}>
            {category.attributes.Adress}
          </Text>
        </View>
      </View>
      <View style={styles.dateTimeContainer}>
        <Feather name="calendar" size={24} color="black" />
        <View style={styles.dateTimeTextContainer}>
          <Text style={styles.dateText}>
            Дүйсенбі, {selectedData.number} Желтоқсан
          </Text>
          <Text style={styles.timeText}>{selectedTime}</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.itemInfoContainer}>
        <Image
          source={{ uri: item.attributes.Image.data[0].attributes.url }}
          style={styles.itemImage}
        />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>{item.attributes.Name}</Text>
          <Text style={styles.itemRole}>{item.attributes.Role}</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.bookingNoteContainer}>
        <Image source={require("../assets/Doc.png")} style={styles.docImage} />
        <View style={styles.bookingNoteTextContainer}>
          <Text style={styles.bookingNoteTitle}>Брондау ескертуі</Text>
          <Text style={styles.bookingNoteSubtitle}>
            Бізге алдын ала айтарыңыз
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setButtonText((prevText) =>
              prevText === "Қосу" ? "Өзгерту" : "Қосу"
            );
          }}
        >
          <Text style={styles.addChangeButton}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: -15, marginBottom: 40 }}>
        <HeaderText text1={"Қызметтер"} show={false} />
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <View>
        <Text style={styles.footerText}>{selectedItems} қызмет үшін</Text>
        <Text style={styles.totalText}>Барлығы</Text>
      </View>
      <View>
        <Text style={styles.priceText}>{totalPrice}₸</Text>
      </View>
    </View>
  );
  const renderFooter1 = () => (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        <Text style={styles.footerPrice}>60.000₸</Text>
        <Text style={styles.footerDetails}>
          {selectedItems} қызмет · 2 сағат
        </Text>
      </View>
      <TouchableOpacity style={styles.footerButton}>
        <Text
          onPress={() => navigation.navigate("Final")}
          style={styles.footerButtonText}
        >
          Брондау
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={Object.values(allSelectedItems)}
        renderItem={({ item }) => (
          <View style={styles.serviceItemContainer}>
            <View>
              <Text style={styles.serviceItemName}>{item.name}</Text>
              <Text style={styles.serviceItemDuration}>
                {item.minutes} сағат
              </Text>
            </View>
            <Text style={styles.serviceItemPrice}>{item.price}₸</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
        ListFooterComponent={renderFooter}
      />
      {renderFooter1()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    marginHorizontal: 18,
  },
  backButton: {
    marginBottom: 10,
  },
  categoryInfo: {
    flexDirection: "row",
    marginTop: 40,
  },
  categoryLogo: {
    width: 48,
    height: 48,
  },
  categoryTextContainer: {
    flexDirection: "column",
    marginLeft: 16,
  },
  categoryName: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 18,
  },
  categoryAddress: {
    fontSize: 11,
    lineHeight: 22,
    fontWeight: "400",
    color: "#3C3C43",
  },
  dateTimeContainer: {
    marginTop: 40,
    flexDirection: "row",
  },
  dateTimeTextContainer: {
    flexDirection: "column",
    marginLeft: 12,
  },
  dateText: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  timeText: {
    color: "rgba(60, 60, 67, 0.60)",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  separator: {
    width: "100%",
    borderBottomWidth: 0.2,
    borderColor: "#5C5C5C",
    marginVertical: 16,
  },
  itemInfoContainer: {
    flexDirection: "row",
  },
  itemImage: {
    width: 36,
    height: 36,
  },
  itemTextContainer: {
    justifyContent: "center",
    alignItems: "left",
    marginLeft: 10,
  },
  itemName: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 18,
  },
  itemRole: {
    color: "rgba(60, 60, 67, 0.6)",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    marginTop: 5,
  },
  bookingNoteContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  docImage: {
    height: 24,
  },
  bookingNoteTextContainer: {
    flexDirection: "column",
    marginLeft: 12,
  },
  bookingNoteTitle: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  bookingNoteSubtitle: {
    color: "rgba(60, 60, 67, 0.60)",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  addChangeButton: {
    color: "#5856D6",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    marginLeft: 140,
  },
  serviceItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(92, 92, 92, 0.1)",
    paddingBottom: 16,
  },
  serviceItemName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 12,
  },
  serviceItemDuration: {
    fontSize: 14,
    color: "#AEAEB2",
  },
  serviceItemPrice: {
    fontSize: 15,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 16,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#AEAEB2",
    marginBottom: 10,
  },
  totalText: {
    fontSize: 15,
    fontWeight: "600",
  },
  priceText: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderTopWidth: 1,
    borderTopColor: "#E5E5EA",
  },
  footerContent: {
    flex: 1,
  },
  footerPrice: {
    fontSize: 17,
    fontWeight: "600",
    color: "black",
  },
  footerDetails: {
    fontSize: 13,
    color: "#8E8E93",
    marginTop: 4,
  },
  footerButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  footerButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default CheckOut;
