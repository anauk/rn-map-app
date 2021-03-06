import React from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Colors from '../constants/Colors'

const PlaceItem = props => {
  return (
    <TouchableOpacity
      style={styles.placeItem}
      onPress={props.onSelect}
    >
      <Image style={styles.image} source={{uri: props.image}}/>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoContainer: {
    marginLeft: 30,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    // backgroundColor: 'blue',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  address: {
    color: '#666',
    fontSize: 16
  }
})

export default PlaceItem
