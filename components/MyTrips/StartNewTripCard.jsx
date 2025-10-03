import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
export default function StartNewTripCard() {



    const router=useRouter();
  return (
    <View style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25,

    }}>
      <MaterialIcons name="location-on" size={30} color="black" />
      <Text style={{
        fontSize:25,
        fontFamily:'outfit-bold',
        marginTop:10,
      }}>
        No Trips Planned Yet
      </Text>
      <Text style={{
        fontSize:20,
        fontFamily:'outfit-bold',
        marginTop:10,
        textAlign:'center',
        color:'#6c5e5eff',
      }}>
       Looks like its time to plan a new travel experience ! get Started below
      </Text>
      <TouchableOpacity
      onPress={()=>{
        router.push('/create-trip/search-place')
      }}
      style={{
        padding:10,
        backgroundColor:"#000",
        borderRadius:15,
        paddingHorizontal:30,

      }}>
        <Text style={{
            color:'#fff',
            fontFamily:'bold',
            fontSize:20,
        }}>
            Start A New Trip
        </Text>
      </TouchableOpacity>
    </View>
  )
}