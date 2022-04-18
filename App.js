/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import MapContainer from './Container/MapContainer';

const App = () => {
  return(
    <View style={styles.container}> 
    <MapContainer/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  }
})
export default App;
