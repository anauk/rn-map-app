import React, {useEffect} from 'react'

import {View, Text, StyleSheet, Platform, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import {useSelector, useDispatch} from 'react-redux'
import PlaceItem from '../components/PlaceItem'
import  * as placesActions from '../store/places-actions'

const PlacesListScreen = props => {
  const places = useSelector(state => state.places.places)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(placesActions.loadPlaces())
  }, [dispatch])
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => <PlaceItem
        image={itemData.item.imageUri}
        title={itemData.item.title}
        address={null}
        onSelect={() => props.navigation.navigate('PlacesDetail')}
      />}
    />
  )
}
PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Places',
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='All Places'
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => {
              navData.navigation.navigate('NewPlace')
            }}
      />
    </HeaderButtons>
  }
}
const styles = StyleSheet.create({})
export default PlacesListScreen
