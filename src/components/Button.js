import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'




const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  btn: {
    width: '80%',
    backgroundColor: '#1faaf5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 5,
  },
  text: {
    color: 'white'
  }
})