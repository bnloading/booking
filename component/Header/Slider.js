import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const autoScrollInterval = useRef(null);

  useEffect(() => {
    initializeSlider(); // Initialize the slider with default images
  }, []);

  useEffect(() => {
    if (sliderList.length > 1) {
      startAutoScroll(); // Start auto-scrolling if there are multiple images
    }
    return () => {
      stopAutoScroll(); // Clean up auto-scrolling on component unmount
    };
  }, [sliderList]);

  // Function to initialize the slider with local images
  const initializeSlider = () => {
    setSliderList([
      { id: 1, source: require("../../assets/main.png") },
      { id: 2, source: require("../../assets/main.png") },
      { id: 3, source: require("../../assets/main.png") },
      { id: 4, source: require("../../assets/main.png") },
      { id: 5, source: require("../../assets/main.png") },
    ]);
  };

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index); // Update the current index when the view changes
    }
  };

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ index, animated: true }); // Scroll to the specified index
  };

  const startAutoScroll = () => {
    stopAutoScroll(); // Ensure no existing intervals are running
    autoScrollInterval.current = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= sliderList.length) {
        nextIndex =4; // Reset to the first image when reaching the end
      }
      scrollToIndex(nextIndex);
      setCurrentIndex(nextIndex);
    }, 1000); // Change image every 3 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current); // Clear the interval to stop auto-scrolling
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        style="inverted"
      />
      {/* Main Image with Overlay Content */}
      <View style={{ position: "relative" }}>
        <FlatList
          ref={flatListRef}
          data={sliderList}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({ item }) => (
            <Image
              source={item.source} // Use the static source directly
              style={{ width, height: 520 }}
            />
          )}
        />

        <View style={[styles.overlayContainer]}>
          {/* Dots Navigation */}
          <View style={styles.dotsContainer}>
            {sliderList.map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => scrollToIndex(index)}
              >
                <View
                  style={[
                    styles.dot,
                    currentIndex === index
                      ? styles.dotActive
                      : styles.dotInactive,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Text Content */}
          <View style={styles.textContent}>
            <Text style={styles.mainText}>
              11% басталатын{"\n"}кешбәкті ал!
            </Text>
            <Text style={styles.subText}>
              BookingApp қосымшасымен{"\n"}уақыт алу арқылы жүзеге енеді
            </Text>
          </View>

          {/* Button */}
          <TouchableOpacity style={[styles.button]}>
            <Text style={styles.buttonText}>Толығырақ білу</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  overlayContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    paddingTop: 310,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 167,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    top: -5,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: "white",
  },
  dotInactive: {
    backgroundColor: "#D1D1D6",
  },
  textContent: {
    alignSelf: "stretch",
    height: 94,
    position: "relative",
    
  },
  mainText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 25,
    position: "absolute",
    top: 0,
    left: 0,
  },
  subText: {
    color: "rgba(235, 235, 245, 0.60)",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
    position: "absolute",
    top: 58,
    left: 0,
  },
  button: {
    alignSelf: "stretch",
    height: 44,
    width: 170,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop:40,
    
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
  },
};
