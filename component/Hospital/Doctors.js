import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

export default function Doctors({ activeTab }) {
  const [activeText, setActiveText] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginTop: 25, marginHorizontal: 0 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity 
              style={[
                activeText == 0 ? styles.activeTabs : styles.inActiveTabs,
              ]}
              onPress={() => {
                setActiveText(0);
                activeTab("Hospital");
              }}
            >
              <Text
                style={[
                  activeText == 1 ? styles.activeText : styles.inActiveText,
                ]}
              >
              Кинолар
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  activeText: { textAlign: "center", fontSize: 18, color: "gray" },
  inActiveText: { textAlign: "center", fontSize: 18, color: "blue" },
  activeTabs: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    padding: 3,
    width: "40%",
  },
  inActiveTabs: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    padding: 3,
    width: "40%",
  },
});
