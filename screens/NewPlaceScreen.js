import React, {useState} from 'react'

import {ScrollView, Button, View, Text, StyleSheet, TextInput} from 'react-native'
import Colors from '../constants/Colors'
import {useDispatch} from 'react-redux'
import * as placesAction from '../store/places-actions'
import ImgPicker from '../components/ImagePicker'
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = props => {
  const [titleValue, setTitleValue] = useState('')
  const [selectedImage, setSelectedImage] = useState('')

  const dispatch = useDispatch()

  const titleChangeHandler = text => {
    //can add validation
    setTitleValue(text)
  }
  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath)
  }
  const savePlaceHandler = () => {
    dispatch(placesAction.addPlace(titleValue, selectedImage))
    props.navigation.goBack()
  }
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImgPicker onImageTaken={imageTakenHandler} />
        <LocationPicker  navigation={props.navigation} />
        <Button
          title="Save place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  )
}

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place'
}

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 2,
    paddingVertical: 4

  }
})
export default NewPlaceScreen
