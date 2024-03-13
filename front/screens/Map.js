import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
import Geocoder from "react-native-geocoding";

let locationsofInterest = [
  {
    title: "first",
    location: {
      latitude: 34.620956287969825,
      longitude: 19.687489941716194,
    },
    description: "this is the  second location of interset",
  },
  {
    title: "second",
    location: {
      latitude: 34.620956287969825,
      longitude: 10.407621078193188,
    },
    description: "this is the first location of interset",
  },
];

export default function Map() {
  const [region, setRegion] = useState({
    longitude: 10,
    latitude: 33.5,
    longitudeDelta: 10,
    latitudeDelta: 10,
  });
  const [userCoords, setUserCoords] = useState(null);
  const [markerCoords, setMarkerCoords] = useState(null);
  const api = "AIzaSyDj20qspxppIBjIMvo7YByBOBB9X4hWtTo";
  Geocoder.init(api);

  const getUserLocation = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted)
      getCurrentPositionAsync()
        .then((location) => {
          const { longitude, latitude } = location.coords;

          setRegion({
            longitude,
            latitude,
            longitudeDelta: 1,
            latitudeDelta: 1,
          });
          setUserCoords({ longitude, latitude });
        })
        .catch((error) => {
          const { code, message } = error;
          console.warn(code, message);
        });
  };

  const setUserLocation = (e) => {
    const coords = e.nativeEvent.coordinate;
    setMarkerCoords(coords);
  };

  const getSearchCoords = async (data) => {
    const { description } = data;
    const response = await Geocoder.from(description);
    const { lat: latitude, lng: longitude } =
      response.results[0]?.geometry?.location;
    setRegion({
      ...region,
      latitude,
      longitude,
    });
    setMarkerCoords({ latitude, longitude });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        onPress={setUserLocation}
        onPoiClick={setUserLocation}
      >
        {markerCoords && <Marker coordinate={markerCoords} />}

        {userCoords && markerCoords && (
          <MapViewDirections
            origin={userCoords}
            destination={markerCoords}
            apikey={api}
            strokeWidth={3}
          />
        )}
      </MapView>
      <GooglePlacesAutocomplete
        placeholder="Search"
        enablePoweredByContainer={false}
        onPress={getSearchCoords}
        debounce={500}
        query={{
          key: api,
        }}
        styles={styles.search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  search: {
    container: {
      position: "absolute",
      top: 30,
      width: "93%",
      borderRadius: 15,
    },
    textInputContainer: {
      backgroundColor: "rgba(0,0,0,0)",
      borderTopWidth: 0,
      borderBottomWidth: 0,
    },
    textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 38,
      color: "#5d5d5d",
      fontSize: 16,
    },
    predefinedPlacesDescription: {
      color: "#1faadb",
    },
  },
});
