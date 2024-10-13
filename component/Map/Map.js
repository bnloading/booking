import { StyleSheet, View } from "react-native";
import React,{useRef,useEffect} from "react";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: 51.169863,
        longitude: 71.448114,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }, 2000);
    }
  }, [mapRef]);

  return (
    <View style={{ marginHorizontal: 20 }}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE} // Use Google Maps as the provider
        initialRegion={{
          latitude: 51.169820,
          longitude: 71.448114,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Marker at a central point in Astana */}
        <Marker
          coordinate={{
            latitude: 51.169820, // Specific location in Astana
            longitude: 71.448114, // Specific location in Astana
          }}
          title="Astana"
          description="Close-up view of Astana, Kazakhstan"
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 236,
  },
});