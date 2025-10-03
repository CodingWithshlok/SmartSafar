import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { Text, View } from "react-native";
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {
const [userTrips,setUserTrips]=useState([]);


  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',


      }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
          }}
        >
          My Trip
        </Text>
        <Ionicons name="add-circle" size={45} color="black" />
      </View>
      {userTrips?.length==0?
      <StartNewTripCard/>
      :null
      }
    </View>
  );
}
