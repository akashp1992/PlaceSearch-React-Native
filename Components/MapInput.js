import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const MapInput = ({notifyChange}) => {
  return (
    <GooglePlacesAutocomplete
    placeholder='Search Address'
    minLength={2}
    fetchDetails={true}
    onPress={(data,details=null)=>{
        notifyChange(details.geometry.location);
    }}
    query={{
        key:'AIzaSyD0CSdY7uisKjY-kwmEUPtzHnHjvxk2Gj8',
        language:'en'
    }}
    nearbyPlacesAPI="GooglePlacesSearch"
    debounce={300}
    />
  )
}

export default MapInput