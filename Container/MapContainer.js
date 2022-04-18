import React from 'react'
import { View } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
import { useEffect, useState } from 'react'
import MapInput from '../Components/MapInput';
import { getLocation, geocodeLocationByName } from '../Services/location-service';
import MyMapView from '../Components/MapView';

const MapContainer = () => {
    const [region, setRegion] = useState(0);

    useEffect(() => {
        getLocation().then(
            (data) => {
                console.log(data);
                setRegion({
                    region: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }
                })
            }
        ).catch(function () {
            console.log("Promiss Rejected");
        })
        // Geolocation.getCurrentPosition(
        //     (position) => {
        //         setRegion({
        //             region: {
        //                 latitude: position.coords.latitude,
        //                 longitude: position.coords.longitude,
        //                 latitudeDelta: 0.003,
        //                 longitudeDelta: 0.003
        //             }
        //         })
        //     }, (error) => {
        //         console.log(error.code, error.message);
        //     },
        //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        // )

    })

    const getCoordsFromName = (loc) => {
        setRegion({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        })
    }

    const onMapRegionChange = (region) => {
        setRegion({region});
    }
    return (
        <View style={{ flex: 3 }}>
            <View style={{ flex: 1 }}>
                <MapInput notifyChange={(loc) => getCoordsFromName(loc)} />
            </View>
            {
                region['latitude'] ?
                    
                        <MyMapView
                            region={region}
                            onRegionChange={(reg) => onMapRegionChange(reg)}
                        />
                     : null
            }

        </View>

    )
}

export default MapContainer