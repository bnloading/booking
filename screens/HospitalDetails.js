import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "../component/Shared/PageHeader";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import HospitalInfo from "../component/Hospital/HospitalInfo";
import ActionButton from "../component/Hospital/ActionButton";
import GlobalApi from "../Services/GlobalApi";
import Modal1 from "../component/Modal/Modal";
import HeaderText from "../component/HeaderText/HeaderText";
import Ionicons from "@expo/vector-icons/Ionicons";
import Map from "../component/Map/Map";
import About from "../component/About/About";
import ReviewList from "../component/Comment/Comment";
import ContactInfo from "../component/Contact/Contact";
export default function HospitalDetails() {
  const route = useRoute();
  const { category } = route.params;
  const param = useRoute().params;
  const navigation = useNavigation();
  const [qyzmetkerler, setQyzmetkerler] = useState([]);
  const [qyzmetkerler2, setQyzmetkerler2] = useState([]);
  const [qyzmetkerler3, setQyzmetkerler3] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedItems1, setSelectedItems1] = useState({});
  const [selectedItems2, setSelectedItems2] = useState({});
  const [selectedItems3, setSelectedItems3] = useState({});
  const [masters, setMasters] = useState([]);
  useEffect(() => {
    getQyzmetker();
    getQyzmetker2();
    getQyzmetker3();
    getMasters();
  }, []);

  const getMasters = () => {
    GlobalApi.getMasters().then((resp) => {
      setMasters(resp.data.data);
    });
  };
  useFocusEffect(
    useCallback(() => {
      setShowModal(false);
    }, [])
  );
  console.log(masters);
  const getQyzmetker = () => {
    GlobalApi.getQyzmetter()
      .then((resp) => {
        setQyzmetkerler(resp.data.data);
      })
      .catch((err) => {
        console.error("Error fetching data: " + err);
      });
  };

  const getQyzmetker2 = () => {
    GlobalApi.getQyzmetter2()
      .then((resp) => {
        setQyzmetkerler2(resp.data.data);
      })
      .catch((err) => {
        console.error("Error fetching data: " + err);
      });
  };

  const getQyzmetker3 = () => {
    GlobalApi.getQyzmetter3()
      .then((resp) => {
        setQyzmetkerler3(resp.data.data);
      })
      .catch((err) => {
        console.error("Error fetching data: " + err);
      });
  };

  const handleToggleItem = (item, category) => {
    if (!showModal) {
      // If the modal is not shown, show it first
      handleShowModal();
    } else {
      // If the modal is already shown, toggle the item
      let selectedItems, setSelectedItems;

      switch (category) {
        case 1:
          selectedItems = selectedItems1;
          setSelectedItems = setSelectedItems1;
          break;
        case 2:
          selectedItems = selectedItems2;
          setSelectedItems = setSelectedItems2;
          break;
        case 3:
          selectedItems = selectedItems3;
          setSelectedItems = setSelectedItems3;
          break;
        default:
          return;
      }

      const isSelected = selectedItems[item.id];
      setSelectedItems((prev) => {
        const newSelectedItems = { ...prev };
        if (isSelected) {
          delete newSelectedItems[item.id];
          setTotalMinutes(totalMinutes - item.attributes.Minut);
          setTotalPrice(totalPrice - item.attributes.Bagasy);
        } else {
          newSelectedItems[item.id] = {
            name: item.attributes.Name,
            price: item.attributes.Bagasy,
            minutes: item.attributes.Minut,
          };
          setTotalMinutes(totalMinutes + item.attributes.Minut);
          setTotalPrice(totalPrice + item.attributes.Bagasy);
        }
        return newSelectedItems;
      });
    }
  };

  const allSelectedItems = {
    ...selectedItems1,
    ...selectedItems2,
    ...selectedItems3,
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const totalSelectedItemCount =
    Object.keys(selectedItems1).length +
    Object.keys(selectedItems2).length +
    Object.keys(selectedItems3).length;
  const renderQyzmetter = (services, category, isModal = false) => {
    let selectedItems;
    switch (category) {
      case 1:
        selectedItems = selectedItems1;
        break;
      case 2:
        selectedItems = selectedItems2;
        break;
      case 3:
        selectedItems = selectedItems3;
        break;
      default:
        selectedItems = {};
    }

    const itemsToRender = isModal ? services : services.slice(0, 3);

    return (
      <View style={{ marginBottom: 24 }}>
        {itemsToRender.map((item) => (
          <View>
            <View key={item.id} style={styles.itemContainer}>
              <View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    fontWeight: "600",
                    lineHeight: 22,
                    flexWrap: "wrap",
                  }}
                >
                  {item.attributes.Name}
                </Text>
                <Text
                  style={{ color: "#AEAEB2", fontSize: 15, fontWeight: 400 }}
                >
                  {item.attributes.Minut} минут
                </Text>
                <Text
                  style={{ color: "#AEAEB2", fontSize: 15, fontWeight: 400 }}
                >
                  {item.attributes.Bagasy} ₸
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleToggleItem(item, category)}
              >
                <View style={styles.toggleButton}>
                  <Text style={styles.toggleText}>
                    {selectedItems[item.id] ? (
                      `-${selectedItems[item.id].price} ₸ / ${
                        selectedItems[item.id].minutes
                      } мин`
                    ) : (
                      <Image source={require("../assets/Plus.png")} />
                    )}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 1,
                marginHorizontal: 18,
                borderColor: "#C6C6C8",
              }}
            ></View>
          </View>
        ))}
        {!isModal && services.length > 3 && (
          <TouchableOpacity onPress={handleShowModal}>
            <View style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>Барлығын қарау</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  const renderSlideMenu = () => {
    return (
      <View style={styles.slideMenuContainer}>
        <TouchableOpacity
          style={[
            styles.slideMenuItem,
            selectedTab === 1 && styles.activeMenuItem,
          ]}
          onPress={() => setSelectedTab(1)}
        >
          <Text
            style={[
              styles.slideMenuText,
              selectedTab === 1 && styles.activeMenuText,
            ]}
          >
            Түстер + Бөлек нүктелер
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.slideMenuItem,
            selectedTab === 2 && styles.activeMenuItem,
          ]}
          onPress={() => setSelectedTab(2)}
        >
          <Text
            style={[
              styles.slideMenuText,
              selectedTab === 2 && styles.activeMenuText,
            ]}
          >
            Кесу + Сәндеу
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.slideMenuItem,
            selectedTab === 3 && styles.activeMenuItem,
          ]}
          onPress={() => setSelectedTab(3)}
        >
          <Text
            style={[
              styles.slideMenuText,
              selectedTab === 3 && styles.activeMenuText,
            ]}
          >
            Шашты емдеу
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    category && (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <View style={{ marginHorizontal: 0 }}>
            {category && category.attributes && (
              <View>
                <Image
                  source={{
                    uri: category.attributes.Image.data.attributes.url,
                  }}
                  style={styles.Image}
                />
              </View>
            )}
          </View>
          <View style={styles.Back}>
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
              }}
            >
              <Ionicons name="arrow-back-outline" size={18} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ marginHorizontal: 16 }}>
            <View style={{ marginTop: 24 }}>
              <Text
                style={{ color: "black", fontSize: 28, fontWeight: "bold" }}
              >
                {category.attributes.Name}
              </Text>
            </View>

            <View style={{ marginTop: 9 }}>
              <Text
                style={{
                  color: "rgba(60, 60, 67, 0.60)",
                  fontSize: 15,
                  fontWeight: "400",
                  lineHeight: 20,
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                20:00-ге дейін ашық . {category.attributes.Adress}
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 9 }}>
              <Image
                source={require("../assets/star.png")}
                style={{ width: 16.7, height: 16.7 }}
              />
              <Text
                style={{
                  color: "black",
                  fontSize: 15,
                  fontWeight: "500",
                  lineHeight: 20,
                  flexWrap: "wrap",
                }}
              >
                {category.attributes.star} (+500)
              </Text>
            </View>
            <ActionButton category={category} />
          </View>
          <View style={{ marginBottom: 0, marginTop: 40 }}>
            <HeaderText text1="Қызметтер " show={false} />
          </View>

          <View>
            {renderSlideMenu()}
            {renderQyzmetter(
              selectedTab === 1
                ? qyzmetkerler
                : selectedTab === 2
                ? qyzmetkerler2
                : qyzmetkerler3,
              selectedTab
            )}
          </View>
          <HeaderText text1="Шеберлер" show={true} masters={masters} />
          <FlatList
            horizontal={true}
            data={masters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity>
                    <Image
                      source={{
                        uri: item.attributes.Image.data[0].attributes.url,
                      }}
                      style={{ width: 100, height: 100, marginLeft: 20 }}
                    />
                    <Text
                      style={{
                        color: "black",
                        fontSize: 12,
                        textAlign: "center",
                      }}
                    >
                      {item.attributes.Name}
                    </Text>
                    <Text
                      style={{
                        color: "gray",
                        fontSize: 11,
                        textAlign: "center",
                      }}
                    >
                      {item.attributes.Role}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row", // Arrange children in a column
                        alignItems: "center", // Center children horizontally
                        justifyContent: "center", // Center children vertically
                        margin: 10,
                        marginLeft: 20,
                        width: 46,
                        height: 24,
                        backgroundColor: "white",
                        position: "absolute",
                        left: "22%",
                        bottom: 20,
                        borderRadius: 50,
                      }}
                    >
                      <Text>5.0</Text>
                      <Image
                        source={require("../assets/star.png")}
                        style={{
                          width: 9.7,
                          height: 9.7,
                          marginLeft: 5,
                          opacity: 1,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />

          <ReviewList />
          <View style={{ marginBottom: 20, marginTop: 40 }}>
            <HeaderText text1="Орналасқан жері" show={false} />
          </View>

          <ScrollView>
            <Map />
            <ContactInfo />
          </ScrollView>
        </ScrollView>

        <Modal1
          showModal={showModal}
          renderSlideMenu={renderSlideMenu}
          renderQyzmetter={renderQyzmetter}
          selectedTab={selectedTab}
          qyzmetkerler={qyzmetkerler}
          qyzmetkerler2={qyzmetkerler2}
          qyzmetkerler3={qyzmetkerler3}
          totalMinutes={totalMinutes}
          totalPrice={totalPrice}
          handleCloseModal={handleCloseModal}
          selectedItems={totalSelectedItemCount}
          category={category}
          allSelectedItems={allSelectedItems}
        />
      </View>
    )
  );
}
const styles = StyleSheet.create({
  slideMenuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    marginHorizontal: 18,
  },
  slideMenuItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeMenuItem: {
    backgroundColor: "#000",
  },
  slideMenuText: {
    color: "#000",
    fontSize: 12,
  },
  activeMenuText: {
    color: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
  },
  toggleButton: {
    backgroundColor: "#D1D1D6",

    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  viewAllButton: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(60, 60, 67, 0.30)",
    marginHorizontal: 18,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  viewAllText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 28,
    marginBottom: 20,
  },
  summaryContainer: {
    marginRight: 140,
    marginBottom: -40,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: "700",
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
  Image: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 999,
  },
  Back: {
    position: "absolute",
    bottom: 0,
    top: 40,
    zIndex: 999,
    left: 30,
  },
});
