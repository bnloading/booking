import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import PaidalyKar from "./PaidalyKar";
import PaidalySta from "./PaidalySta";
import PaidalyOt from "./PaidalyOt";
import PaidalyPs from "./PaidalyPs";
import PaidalyNev from "./PaidalyNev";
import PageHeader from "../Shared/PageHeader";

const PaidalyItem = ({ route }) => {
  const { categoryName, image } = route.params;

  let categoryComponent = null;
  if (categoryName === "Тарихи") {
    categoryComponent = <PaidalySta />;
  } else if (categoryName === "Драма") {
    categoryComponent = <PaidalyKar />;
  } else if (categoryName === "Балалар фильмдері") {
    categoryComponent = <PaidalyOt />;
  } else if (categoryName === "Комедия") {
    categoryComponent = <PaidalyNev />;
  } else if (categoryName === "Документалды фильмдер") {
    categoryComponent = <PaidalyPs />;
  }

  return (
    <SafeAreaView style={styles.container}>
    <PageHeader/>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={{ width: 140, height: 100, resizeMode: "contain" }}
        />
      </View>
      {categoryComponent && (
        <>
          <Text
            style={{ fontSize: 26, fontFamily: "app-Bold", marginBottom: 20 }}
          >
            {categoryName}
          </Text>
          {categoryComponent}
        </>
      )}
    </SafeAreaView>
  );
};

export default PaidalyItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
