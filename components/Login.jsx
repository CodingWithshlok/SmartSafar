import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { Colors } from "./../constants/Colors";

export default function Login() {
  const router=useRouter();
  return (
    <View>
      {/* <Text>Login</Text> */}
      <Image
        source={require("./../assets/images/first.jpg")}
        style={{
          width: "100%",
          height: 520,
          // resizeMode: "contain",
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit",
            textAlign:'center',
            marginTop:10,
          }}
        >
          AI Travel Planner 
        </Text>
        <Text style={{
          fontFamily:'outfit-regular',
          fontsize:17,
          textAlign:'center',
          color:'#555',
          marginTop:'5%',
        }}>
          Discover your next adventure effortlessly .Personalized itinearise at your fingertips .travel smarter with AI-driven insights.
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('/auth/sign-in')}
        >
          <Text style={{
            color:'#fff',
            textAlign:'center',
            fontFamily:'outfit',
            fontSize:16,
          }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.WHITE,
    backgroundColor:'#fff',
    marginTop: -20,
    borderTopLeftRadius:20,
     borderTopRightRadius:20,
    height: "100",
    padding: 15,

    flex: "100%",
  },
  button:{
    padding:15,
    backgroundColor:'#000',
  borderRadius:99,
  marginTop:'5%',


  }
});