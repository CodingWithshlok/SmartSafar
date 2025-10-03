import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { auth } from '../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
   const router=useRouter();

   const [email,setEmail]=useState();
   const [password,setPassword]=useState();
   const [fullName,setFullName]=useState();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const OnCreateAccount=()=>{

  if(!email&&!password&&!fullName)
  {
    ToastAndroid.show("Pleas fill All the Fields",ToastAndroid.LONG);
    return ;
  }


    //FireBase word-------------------
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace('/mytrip')
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    // ..
  });

  }

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        height:'100%',
      }}
    >
      <TouchableOpacity  onPress={()=>router.back()}>
      <AntDesign name="backward" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop:30,

        }}
      >
        
        Create New Account
      </Text>
      {/* User Full Name -------------------------- */}

      <View style={{ marginTop: 50 }}>
        <Text>Full Name</Text>
        <TextInput placeholder="Enter Full Name" style={styles.input}
        onChangeText={(value)=>setFullName(value)}
        />
      </View>
      {/* Email--------------------------------- */}
      <View style={{ marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput placeholder="Enter  Email" style={styles.input} 
        onChangeText={(value)=>setEmail(value)}
        />
      </View>

      {/* Password ---------- */}
      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Your Password"
          style={styles.input}
          onChangeText={(value)=>setPassword(value)}
        />
      </View>
      {/* Create the Account ---------------------- */}
      <TouchableOpacity  onPress={OnCreateAccount}  style={{
        padding:20,
        backgroundColor:'#000',
        borderRadius:99,
        marginTop:50,

      }}>
        <Text style={{
          color:'#fff',
          textAlign:'center',
        }}>Create the Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
            onPress={()=>router.replace('/auth/sign-in')}
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
              }}>Sign In</Text>
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
