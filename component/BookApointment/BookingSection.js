import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import SubHeading from "../Header/SubHeading";
import moment from "moment";
import { useUser } from "@clerk/clerk-expo";
import GlobalApi from "../../Services/GlobalApi";

const BookingSection = ({ hospital }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [notes, setNotes] = useState();
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);
  const [appointmentList, setAppointmentList] = useState([]);
  const { user } = useUser();
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  const [number, setNumber] = useState();

  useEffect(() => {
    getDays();
    getTime();
    getUserAppointments();
  }, []);

  useEffect(() => {
    return () => {
      setSelectedDate(null);
      setSelectedTime(null);
    };
  }, []);
  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 1; i < 8; i++) {
      const date = moment().add(i, "days");
      nextSevenDays.push({
        date: date,
        day: date.format("ddd"),
        formmatedDate: date.format("Do MMM"),
      });
    }
    setNext7Days(nextSevenDays);
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

  const getUserAppointments = async () => {
    if (!user) return;

    try {
      const response = await GlobalApi.getUserAppointment(
        user.primaryEmailAddress.emailAddress
      );
      setAppointmentList(response.data.data);
    } catch (error) {
      console.error("Error fetching user appointments:", error);
    }
  };

  const isDateTimeBooked = (date, time) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const isBooked = appointmentList.some(
      (appointment) =>
        moment(appointment.Date).format("YYYY-MM-DD") === formattedDate &&
        (time ? appointment.Time === time : true)
    );
    return isBooked;
  };

  const BookAppointment = async () => {
    if (isAppointmentBooked) {
      Alert.alert("Error", "You have already booked an appointment");
      return;
    }
    try {
      const data = {
        data: {
          UserName: user.firstName,
          Date: selectedDate,
          Time: selectedTime,
          Email: user.primaryEmailAddress.emailAddress,
          hospitals: hospital.id,
          Note: notes,
          Number: number,
        },
      };

      const response = await GlobalApi.createAppointment(data);
      console.log("Appointment created:", response.data);
      setIsAppointmentBooked(true);

      // Update the appointment list
      setAppointmentList([...appointmentList, response.data]);

      // Add the newly booked appointment to the bookedAppointments state
      //setBookedAppointments((prevBookedAppointments) => [
      //  ...prevBookedAppointments,
      //  { date: selectedDate, time: selectedTime },
      //]);
    } catch (error) {
      console.error("Error creating appointment:", error);
      // Handle the error as needed
    }
  };

  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontFamily: "app-Semi", color: "gray" }}>
          Кезекке жазылу
        </Text>
      </View>

      <SubHeading subHeadingTitle={"Күн"} seeAll={false} />
      <FlatList
        horizontal={true}
        data={next7Days}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.date,
              selectedDate === item.date ? { backgroundColor: "blue" } : null,
            ]}
            onPress={() => {
              if (isAppointmentBooked) {
                Alert.alert("Error", "You have already booked an appointment");
              } else {
                setSelectedDate(item.date);
              }
            }}
            disabled={isDateTimeBooked(item.date, null) || isAppointmentBooked}
          >
            <Text
              style={[
                { color: "gray", fontFamily: "app-Semi" },
                selectedDate === item.date || isDateTimeBooked(item.date, null)
                  ? { color: "white" }
                  : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                { color: "gray", fontFamily: "app-Semi" },
                selectedDate === item.date || isDateTimeBooked(item.date, null)
                  ? { color: "white" }
                  : null,
              ]}
            >
              {item.formmatedDate}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.date.toString()}
      />

      <FlatList
        horizontal={true}
        data={timeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.date,
              selectedTime === item.time ? { backgroundColor: "blue" } : null,
            ]}
            onPress={() => {
              if (isAppointmentBooked) {
                Alert.alert("Error", "You have already booked an appointment");
              } else {
                setSelectedTime(item.time);
              }
            }}
            disabled={
              isDateTimeBooked(selectedDate, item.time) || isAppointmentBooked
            }
          >
            <Text
              style={[
                { color: "gray", fontFamily: "app-Semi" },
                selectedTime === item.time ||
                isDateTimeBooked(selectedDate, item.time)
                  ? { color: "white" }
                  : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.time.toString()}
      />
      <SubHeading
        subHeadingTitle={
          "Кері байланысқа шығу үшін номер және де сұрақтар қалдырыңыз"
        }
        seeAll={false}
      />
      <TextInput
        onChangeText={(value) => setNumber(value)}
        style={{
          backgroundColor: "white",
          padding: 5,
          borderRadius: 20,
          borderWidth: 1,
          textAlignVertical: "top",
        }}
        placeholder="Номер қалдырыңыз"
        keyboardType="numberic"
      />

      <TextInput
        onChangeText={(value) => setNotes(value)}
        numberOfLines={3}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 20,
          borderWidth: 1,
          textAlignVertical: "top",
        }}
        placeholder="Піккр қалдырыңыз"
      />
      <TouchableOpacity
        onPress={() => BookAppointment()}
        style={{
          padding: 13,
          backgroundColor: isAppointmentBooked ? "gray" : "blue",
          margin: 10,
          borderRadius: 99,
          left: 0,
          right: 0,
          marginBottom: 10,
          zIndex: 20,
        }}
        disabled={isAppointmentBooked}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "app-Semi",
            color: "white",
            fontSize: 18,
          }}
        >
          {isAppointmentBooked ? "Кезек жазылды" : "Кезекке жазылу"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 99,
    padding: 5,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default BookingSection;
