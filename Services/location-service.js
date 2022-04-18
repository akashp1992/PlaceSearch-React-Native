import Geolocation from 'react-native-geolocation-service'
import Geocoder from 'react-native-geocoding';
//Get Location From Current Position With Promise
export const getLocation = () => {
    return new Promise(
        (reslove, reject) => {
            Geolocation.getCurrentPosition(
                (data) => reslove(data.coords),
                (err) => reject(err)
            )
        }
    )
}

export async function getUserLocation() {
    return new Promise((resolve, reject) => {
        Permissions.check('location')
            .then(response => {
                if (response == 'authorized') {
                    navigator.geolocation.getCurrentPosition(
                        (location) => {
                            resolve({
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude
                            });
                        },
                        (error) => {
                            reject(error);
                        },
                        Platform.OS === 'android' ? null : { enableHighAccuracy: true, timeout: 100000, maximumAge: 1000 }
                    );
                } else {
                    resolve(null);
                }
            })
    });
}

//Get Location By Name using GeoCode
export const geocodeLocationByName = (locationName) => {
    return new Promise(
        (reslove, reject) => {
            Geocoder.from(locationName)
                .then(json => {
                    const addressComponent = json.results[0].address_components[0];
                    reslove(addressComponent);
                })
                .catch(err => reject(err))
        }
    )
}

//Get Location By Coords
export const geocodeLocationByCoords = (lat, long) => {
    return new Promise(
        (resolve, reject) => {
            Geocoder.from(lat, long)
                .then(json => {
                    const addressComponent = json.results[0].address_components[0];
                    resolve(addressComponent);
                })
                .catch(error => reject(error));
        }
    );
}
