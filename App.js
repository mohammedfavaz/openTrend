
import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import AddSubButton from './src/components/AddSubButton'

export default function App() {
  return (
    <View style={styles.mainView}>
      <AddSubButton/>
    </View>
  )
}
const styles=StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor:"#fff",
    padding:10,
    alignItems:"center",
    justifyContent:"center"
  }
})