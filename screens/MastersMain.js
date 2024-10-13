import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const MasterModal = ({ visible, onClose, masters, onMasterPress }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={require("../assets/Frame 22.png")}
                style={styles.backArrow}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Біздің шеберлеріміз</Text>
          </View>
          <FlatList
            data={masters}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.masterItem}>
                <View style={styles.masterCard}>
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
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",

    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "flex-end",
    marginHorizontal: 18,
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    height: "100%",
    marginLeft: -10,
  
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
    bottom: 60,
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
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});

export default MasterModal;
