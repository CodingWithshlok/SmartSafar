import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchPlace() {

    const navigation=useNavigation();
    useEffect(()=>{
     navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle:'Search',
     })
    },[])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'#fff',
        height:'100%',

    }}>
     <GooglePlacesAutocomplete
  placeholder='Search'
  fetchDetails={true}    // 👈 ADD THIS LINE
  onPress={(data, details = null) => {
    console.log(data, details);
  }}
  query={{
    key: 'YOUR_REAL_GOOGLE_PLACES_API_KEY',
    language: 'en',
  }}
/>

    </View>
  )
}