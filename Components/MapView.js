import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const MyMapView = ({ onRegionChange, region }) => {
    return (
        <MapView
            style={styles.container}
            initialRegion={region}
            showsUserLocation={true}
            onRegionChange={(reg) => onRegionChange(reg)}>
            <Marker coordinate={region} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
       flex:1
    }
})

export default MyMapView