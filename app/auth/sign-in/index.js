import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { auth } from '../../../configs/FirebaseConfig';
export default function SignIn() {
  const navigation = useNavigation();
 const router=useRouter();

 const [email,setEmail]=useState();
 const [password,setPassword]=useState();

  
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onSignIn =()=>{
  if(!email&&!password)
  {
    ToastAndroid.show("Pleas fill Email And Password ",ToastAndroid.LONG);
    return ;
  }



    //Sign In Logic---------------
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    if(errorcode=="auth/user-not-found")

      {
        ToastAndroid.show("User Not Found",ToastAndroid.LONG);
      }
  });


  }

  return (
    <View
      style={{
        padding: 25,
        // marginTop:60,
        height: "100%",
        backgroundColor: "#fff",
        paddingTop: 50,
      }}
    >
      {/* <Image
        source={require("")}
        style={{
          width: "100%",
          height: 520,
          // resizeMode: "contain",
        }}
      /> */}

        
      <TouchableOpacity  onPress={()=>router.back()}>
      <AntDesign name="backward" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
        }}
      >
        Let's Sign You In
      </Text>

      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          color: "#555",
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          color: "#555",
          marginTop: 10,
        }}
      >
        You've been Missed
      </Text>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text>Email</Text>
        <TextInput placeholder="Enter Your Email" style={styles.input} onChangeText={(value)=>setEmail(value)} />
      </View>
      {/* Password ---------- */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Your Password"
          style={styles.input}
          onChangeText={(value)=>setPassword(value)}
        />
      </View>
      {/* Sign In Button  */}
      <TouchableOpacity 
      onPress={onSignIn}
      style={{
        padding:20,
        backgroundColor:'#000',
        borderRadius:99,
        marginTop:50,

      }}>
        <Text style={{
          color:'#fff',
          textAlign:'center',
        }}>Sign In</Text>
      </TouchableOpacity>
       {/* Create A  Button  */}
      <TouchableOpacity
      onPress={()=>router.replace('/auth/sign-up')}
      style={{
        padding:20,
        borderRadius:99,
        marginTop:20,
        borderWidth:1,
        borderColor:'#ddd',
        backfgroundColor:'#fff',
        
      }}>
        <Text style={{
          color:'#000',
          textAlign:'center',
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ddd",
  },
});
