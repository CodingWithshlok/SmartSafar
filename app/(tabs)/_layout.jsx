import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs screenOption={{
      headerShown:false,
      Color:'Black',
    }}> 
      <Tabs.Screen name="mytrip"
      options={{
        tabBarLabel:'MY Trip',
        tabBarIcon:({})=><Entypo name="location" size={24} color="blue" />
      }}
      />


       <Tabs.Screen name="discover"
       options={{
        tabBarLabel:'Discover Place',
        tabBarIcon:({})=><FontAwesome6 name="globe" size={24} color="black"  />
      }}
       
       
       />
        <Tabs.Screen name="profile"
        
        options={{
        tabBarLabel:'MY Profile',
        tabBarIcon:({})=><Ionicons name="people-circle" size={24} color="black" />
      }}
        />
        
    </Tabs>
  )
}
  






