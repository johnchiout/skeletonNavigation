import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CenterBox({children}) {
  return (
    <View style={styles.box}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
    box: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    }
});