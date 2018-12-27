import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AlbumList, Header } from '../components'

const App = () => (
  <View style={StyleSheet.absoluteFill}>
    <Header text={'Albums'}/>
    <AlbumList/>
  </View>
)

export default App