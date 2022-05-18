import { View, Text, StyleSheet, Image, Linking} from 'react-native'
import React, {useRef, useEffect} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICONS } from '../../common/Images';
import { googleMapAPI } from '../../apis';
import decodePolyline from 'decode-google-map-polyline';

const MapScreen = () => {
  const mapRef = useRef();
  let points = "yrn`A{`ejShBDb@@XGvBBRANGJO@WAeBC}F?sBBMNMw@o@CkBCoB?eCFsA?}EDkOUeUM}TvDExD?zCCf@CBi@C_IfFGVAn@Mf@SfDoDnEwEVi@Nm@BUDq@Dq@N{@|@cFh@wC`@{BFk@?a@OoAU_A_AqB_CsEmCcF}BoEiG{LsE{IjCsAlDkB|IwErPyInBcAn@rApA|BFLhAs@bCmALI"


  const coordinator = {
    latitude: 10.7171564,
    longitude: 106.7273729,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  const initialRegion = {
    latitude: 10.729567,
    longitude: 106.6908869,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  useEffect(() => {
    mapRef.current.animateToRegion(coordinator,350)
  })

  const onPress = () => {
    mapRef.current.animateToRegion(coordinator,350)
    // Linking.openURL(`tel:0948870949`)
  }

  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${initialRegion.latitude},${initialRegion.longitude}&destination=${coordinator.latitude},${coordinator.longitude}&key=${googleMapAPI}`

  // const getDirection = () => {
  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((json) => json.routes.forEach(element => {
  //     points = element.overview_polyline.points
  //     console.log(points)
  //   }))
  // }
  // getDirection()

  let newCoord = decodePolyline(points).map((value) => ({latitude: value.lat, longitude: value.lng}))

  let destinationCoord = newCoord[0]
  let startCoord = newCoord[newCoord.length - 1]
  

  return (
    <View style={{flex: 1}}>
      <MapView style={StyleSheet.absoluteFill}
        ref = {mapRef}
        provider={PROVIDER_GOOGLE}
        zoomEnabled
        zoomControlEnabled
        maxZoomLevel={20}
        minZoomLevel={5}
        initialRegion={initialRegion}
      >
        <Polyline coordinates={newCoord} 
          strokeColor={'green'}
          strokeWidth={4}
        />
        <Marker
          coordinate={startCoord}
        >
          <Image source={ICONS.car} style={styles.icon} />
        </Marker>

        <Marker
          coordinate={destinationCoord}
        >
          <Image source={ICONS.red_pin} style={styles.icon} />
        </Marker>

      </MapView>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={ICONS.car} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {},
  button: {

  },
  icon: {
    width: 42,
    height: 42
  }
})