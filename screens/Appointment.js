import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import PageHeader from "../component/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Video } from "expo-av";

const Appointment = () => {
  const { user } = useUser();
  const { isLoaded, signOut } = useAuth();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    GlobalApi.getMovie().then((resp) => {
      const movieData = resp.data.data;
      if (movieData && movieData.length > 0) {
        setMovieData(movieData);
      }
    });
  };

  return (
    <View>
      <PageHeader headerTitle={"Сіздің жазылымдарыңыз"} backButton={false} />
      <View style={styles.container}>
      
      </View>
    </View>
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

export default Appointment;
