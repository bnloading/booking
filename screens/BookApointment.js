import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import AppointmentHospitalInfo from "../component/BookApointment/AppointmentHospitalInfo";

import HorizantalLine from "../component/Shared/HorizantalLine";
import BookingSection from "../component/BookApointment/BookingSection";
import ActionButton from "../component/Hospital/ActionButton";


const BookApointment = () => {
  const param = useRoute().params;

  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <AppointmentHospitalInfo hospital={param.hospital} />
      {/*<ActionButton */}
      <HorizantalLine />
      <BookingSection hospital={param.hospital}/>
    </ScrollView>
  );
};

export default BookApointment;
