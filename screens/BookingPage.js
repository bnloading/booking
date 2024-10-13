import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "../component/HeaderText/HeaderText";
import Ionicons from "@expo/vector-icons/Ionicons";

const BookingPage = () => {
  const route = useRoute();
  const param = useRoute().params;
  const { item, category, allSelectedItems, selectedItems } = route.params;
  const navigation = useNavigation();

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState();

  const days = [
    { number: 31, name: "Сей", available: true },
    { number: 1, name: "Сәр", available: false },
    { number: 2, name: "Бей", available: false },
    { number: 3, name: "Жұма", available: false },
  ];

  const times = [
    { time: "9:00", available: true },
    { time: "9:45", available: false },
    { time: "12:30", available: true },
    { time: "17:00", available: false },
    { time: "18:00", available: true },
    { time: "19:30", available: false },
    { time: "20:00", available: true },
  ];

  const renderDayItem = ({ item: day }) => (
    <TouchableOpacity
      style={[
        styles.dayItem,
        selectedDay === day.number && styles.selectedDayItem,
      ]}
      onPress={() => {
        setSelectedDay(day.number);
      }}
    >
      <Text
        style={[
          styles.dayNumber,
          !day.available && styles.busyDayNumber,
          selectedDay === day.number && day.available && styles.selectedDayText,
        ]}
      >
        {day.number}
      </Text>
      <Text
        style={[
          styles.dayName,
          !day.available && styles.busyDayName,
          selectedDay === day.number && day.available && styles.selectedDayText,
        ]}
      >
        {day.name}
      </Text>
    </TouchableOpacity>
  );

  const renderTimeItem = ({ item }) => (
    <TouchableOpacity
      style={item.available ? styles.timeItem : styles.unavailableTimeItem}
      onPress={() => {
        if (item.available) {
          // Handle time slot selection
          setSelectedTime(item.time);
        }
      }}
      disabled={!item.available}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={item.available ? styles.timeText : styles.unavailableTimeText}
        >
          {item.time}
        </Text>
        {selectedTime === item.time && (
          <Ionicons
            name="checkmark-outline"
            size={24}
            color="#4CAF50"
            style={styles.checkIcon}
          />
        )}
      </View>
      {console.log(selectedTime)}
    </TouchableOpacity>
  );

  const selectedDayData = days.find((day) => day.number === selectedDay);

  console.log("Selected Day Data:", selectedDayData); // Debugging log

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ marginHorizontal: 18 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back-outline" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.pop(2)}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 20, marginTop: 28, marginLeft: -18 }}>
          <HeaderText text1={"Уақытты таңдаңыз"} show={false} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 0 }}>
            <Image
              source={{ uri: item.attributes.Image.data[0].attributes.url }}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>5.0</Text>
                <Image
                  source={require("../assets/star.png")}
                  style={styles.starIcon}
                />
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "left" }}>
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  lineHeight: 18,
                  textAlign: "left",
                }}
              >
                {item.attributes.Name}
              </Text>
            </View>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
              <Text
                style={{
                  fontSize: 11,
                  lineHeight: 13,
                  fontWeight: "400",
                  color: "#3C3C43",
                  textAlign: "left",
                }}
              >
                {item.attributes.Role}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 32, marginBottom: 40 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", lineHeight: 20 }}>
            Тамыз 2024
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.dayList}
          >
            <FlatList
              data={days}
              renderItem={renderDayItem}
              keyExtractor={(day) => day.number.toString()}
              horizontal
            />
          </ScrollView>
          {selectedDayData ? (
            selectedDayData.available ? (
              <FlatList
                data={times}
                renderItem={renderTimeItem}
                keyExtractor={(item) => item.time.toString()}
                style={styles.timeList}
              />
            ) : (
              <View style={{ marginTop: 10 }}>
                <View style={styles.infoBox}>
                  <View style={styles.infoBoxHeader}>
                    <Text style={styles.infoBoxHeaderText}>
                      {item.attributes.Name} бұл күнге толықтай брондалған
                    </Text>
                  </View>
                  <View style={styles.infoBoxBody}>
                    <Text style={styles.infoBoxBodyText}>
                      бірақ сіз 31-Желтоқсан Дүйсенбі күніне жазыла аласыз
                    </Text>
                  </View>
                </View>
              </View>
            )
          ) : null}
          {selectedDayData && selectedDayData.available ? (
            <View style={{ marginTop: 40 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CheckOutPage", {
                    selectedData: selectedDayData,
                    selectedTime: selectedTime,
                    item: item,
                    category: category,
                    allSelectedItems: allSelectedItems,
                    selectedItems: selectedItems,
                  })
                }
              >
                <View style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>
                    31 Желтоқсан Дүйсенбі таңдау
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingPage;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 15,
    position: "absolute",
    bottom: -10,
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
  backButton: {
    height: 36,
    width: 36,
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",

    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  closeButton: {
    backgroundColor: "#000",
    width: 343,
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
  dayList: {
    flexDirection: "row",
    padding: 10,
  },
  dayItem: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  selectedDayItem: {
    backgroundColor: "black",
  },
  dayNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  busyDayNumber: {
    color: "#CCCCCC",
  },
  dayName: {
    fontSize: 12,
    color: "gray",
  },
  busyDayName: {
    color: "#CCCCCC",
  },
  selectedDayText: {
    color: "white",
  },
  timeList: {
    paddingHorizontal: 20,
    height: 250,
  },
  timeItem: {
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderBottomColor: "#E0E0E0",
  },
  timeText: {
    fontSize: 18,
    color: "black",
  },
  infoBox: {
    width: "100%",
    height: 98,
    backgroundColor: "#FFCC00",
    borderRadius: 8,
  },
  infoBoxHeader: {
    marginBottom: 8,
    height: 42,
    marginHorizontal: 50,
    marginTop: 16,
  },
  infoBoxHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  infoBoxBody: {
    marginHorizontal: 16,
  },
  infoBoxBodyText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#3C3C43",
    textAlign: "center",
  },
  noAvailabilityText: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
    fontWeight: "600",
  },
  unavailableTimeItem: {
    opacity: 0.5,
  },
  unavailableTimeText: {
    color: "gray",
  },
});
