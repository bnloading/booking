import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import { useNavigation, useRoute } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  const [sliderHero, setSliderHero] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryItems, setCategoryItems] = useState([]);
  const param = useRoute().params;

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await GlobalApi.getHero();
      setSliderHero(response.data.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const handleCategoryPress = async (categoryName) => {
    setSelectedCategory(categoryName);
    await fetchCategoryItems(categoryName);
  };

  const fetchCategoryItems = async (categoryName) => {
    try {
      const response = await GlobalApi.getHospitalByCategory(categoryName);
      setCategoryItems(response.data.data);
    } catch (error) {
      console.error("Failed to fetch category items", error);
    }
  };

  if (!sliderHero.length) {
    return null;
  }

  const renderCategoryItems = () => (
    <View style={styles.categoryItemsContainer}>
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
            lineHeight: 20,
          }}
        >
          Сіздің аймағыңызда танымал
        </Text>
      </View>
      <FlatList
        data={categoryItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("hospital-name", {
                category: item,
              })
            }
          >
            <View style={styles.itemContainer}>
              <Image
                source={{
                  uri: item.attributes.Image.data.attributes.url,
                }}
                style={styles.imageStyle}
              />
              <Text style={styles.textStyle}>{item.attributes.Name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Image source={require("../../assets/star.png")} />
                <View style={{ marginLeft: 3 }}>
                  <Text>{item.attributes.star} (+500)</Text>
                </View>
              </View>
              <View style={{ marginBottom: 24 }}>
                <Text
                  style={{
                    color: "rgba(60, 60, 67, 0.60)",
                    fontSize: 15,
                    fontWeight: "400",
                    lineHeight: 20,
                  }}
                >
                  {item.attributes.Adress}
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  marginBottom: 24,
                  borderWidth: 1,
                  borderColor: "#C6C6C8",
                  borderStyle: "solid",
                }}
              ></View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <FlatList
      data={sliderHero}
      numColumns={4}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({ item, index }) =>
        index < 8 && (
          <TouchableOpacity
            onPress={() => handleCategoryPress(item.attributes.Name)}
            style={styles.categoryButton}
          >
            <Image
              source={{ uri: item.attributes.Icon.data.attributes.url }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>{item.attributes.Name}</Text>
          </TouchableOpacity>
        )
      }
      ListFooterComponent={selectedCategory ? renderCategoryItems : null}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 24,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  categoryButton: {
    alignItems: "center",
    marginBottom: 10,
  },
  categoryImage: {
    width: 68,
    height: 68,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  categoryItemsContainer: {
    flex: 1,
    marginTop: 20,
  },
  itemContainer: {
    padding: 0,
    backgroundColor: "#f0f0f0",
  },
  imageStyle: {
    marginTop: 24,
    width: 380,
    height: 380,
    borderRadius: 12,
    alignSelf: "center",
  },
  textStyle: {
    color: "black",
    fontSize: 18,
    fontWeight: "590",
    lineHeight: 20,
    wordWrap: "break-word",
    marginTop: 16,
    marginLeft: 0,
  },
});

export default Categories;
